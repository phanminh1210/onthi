<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  total: number
  answeredCount: number
  currentIndex: number
  remainingSeconds: number
  selectedAnswers: Record<number, number>
  questions: Question[]
  isSubmitted: boolean
}>()

const emit = defineEmits<{
  (e: 'goTo', index: number): void
  (e: 'submit'): void
}>()

const formattedTime = computed(() => {
  const m = Math.floor(props.remainingSeconds / 60)
  const s = props.remainingSeconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

// Kiểm tra trạng thái của từng câu hỏi
function getQuestionStatusClass(n: number) {
  const questionIndex = n - 1
  const question = props.questions[questionIndex]
  if (!question) return ''

  const userSelected = props.selectedAnswers[question.id]

  // Chưa làm -> hiện màu trắng
  if (userSelected === undefined) {
    return 'unanswered'
  }

  // Đã làm -> So sánh đáp án vừa chọn với correctAnswer
  if (userSelected === question.correctAnswer) {
    return 'correct' // Đúng -> Xanh lá
  } else {
    return 'wrong'   // Sai -> Đỏ
  }
}
</script>

<template>
  <aside class="exam-sidebar">
    <div class="sidebar-card">
      <div class="timer-box">
        <span class="timer-label">⏱️ Thời gian còn lại</span>
        <span class="timer-value">{{ formattedTime }}</span>
      </div>
    </div>

    <div class="sidebar-card grid-card">
      <div class="grid-header">
        <h4>Danh sách câu hỏi</h4>
        <span class="progress-badge">{{ answeredCount }}/{{ total }}</span>
      </div>

      <!-- Chú thích màu sắc -->
      <div class="color-legend">
        <div class="legend-item"><span class="dot white"></span> Chưa làm</div>
        <div class="legend-item"><span class="dot green"></span> Đúng</div>
        <div class="legend-item"><span class="dot red"></span> Sai</div>
      </div>

      <div class="questions-grid">
        <button
          v-for="n in total"
          :key="n"
          class="grid-item"
          :class="[
            getQuestionStatusClass(n),
            { 'active': currentIndex === n - 1 }
          ]"
          @click="emit('goTo', n - 1)"
        >
          {{ n }}
        </button>
      </div>

      <button 
        v-if="!isSubmitted" 
        class="btn-full" 
        @click="emit('submit')"
      >
        Nộp bài thi ngay
      </button>
    </div>
  </aside>
</template>

<style scoped>
.exam-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.timer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timer-label {
  color: var(--text-sub);
  font-size: 13px;
  font-weight: 600;
}

.timer-value {
  font-size: 24px;
  font-weight: 800;
  color: #347bf0;
  font-family: monospace;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.grid-header h4 {
  margin: 0;
  font-size: 15px;
  color: var(--text-color);
}

.progress-badge {
  background: var(--opt-bg);
  border: 1px solid var(--border-color);
  color: var(--text-sub);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
}

/* Chú thích màu sắc */
.color-legend {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
  font-size: 11px;
  color: var(--text-sub);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  display: inline-block;
}

.dot.white {
  background: #ffffff;
  border: 1px solid #ccc;
}

.dot.green {
  background: #27ae60;
}

.dot.red {
  background: #eb5757;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(42px, 1fr));
  gap: 8px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 4px;
  margin-bottom: 20px;
}

/* Ô CÂU HỎI */
.grid-item {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 1. Trạng thái Chưa làm -> Màu trắng */
.grid-item.unanswered {
  background: #ffffff !important;
  color: #1e293b !important;
  border: 1px solid #cbd5e1 !important;
}

/* 2. Trạng thái Làm ĐÚNG -> Màu xanh lá */
.grid-item.correct {
  background: #27ae60 !important;
  color: #ffffff !important;
  border: 1px solid #27ae60 !important;
}

/* 3. Trạng thái Làm SAI -> Màu đỏ */
.grid-item.wrong {
  background: #eb5757 !important;
  color: #ffffff !important;
  border: 1px solid #eb5757 !important;
}

/* Câu đang chọn xem (Active border) */
.grid-item.active {
  box-shadow: 0 0 0 3px #347bf0 !important;
  transform: scale(1.05);
}

.btn-full {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: #347bf0;
  color: #ffffff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-full:hover {
  background: #2364e8;
}
</style>