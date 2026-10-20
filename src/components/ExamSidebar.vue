<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  total: number
  answeredCount: number
  currentIndex: number
  remainingSeconds: number
  selectedAnswers: Record<number, number | number[]>
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

// So sánh 2 mảng xem có trùng khớp hoàn toàn các phần tử không
function areArraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false
  const setA = new Set(a)
  return b.every(val => setA.has(val))
}

// Kiểm tra trạng thái của từng câu hỏi
function getQuestionStatus(question: Question): 'unanswered' | 'correct' | 'wrong' {
  const userSelected = props.selectedAnswers[question.id]
  if (userSelected === undefined) return 'unanswered'

  let isCorrect = false
  if (Array.isArray(question.correctAnswer)) {
    if (Array.isArray(userSelected)) {
      isCorrect = areArraysEqual(userSelected, question.correctAnswer)
    }
  } else {
    isCorrect = userSelected === question.correctAnswer
  }

  return isCorrect ? 'correct' : 'wrong'
}

// Tính toán số câu đúng và số câu sai hiện tại
const stats = computed(() => {
  let correct = 0
  let wrong = 0

  props.questions.forEach(q => {
    const status = getQuestionStatus(q)
    if (status === 'correct') correct++
    else if (status === 'wrong') wrong++
  })

  return { correct, wrong }
})

function getQuestionStatusClass(n: number) {
  const question = props.questions[n - 1]
  if (!question) return ''
  return getQuestionStatus(question)
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

      <!-- Thêm phần thống kê Số câu Đúng / Sai -->
      <div class="stats-summary">
        <div class="stat-item correct-stat">
          <span>✅ Đúng: <strong>{{ stats.correct }}</strong></span>
        </div>
        <div class="stat-item wrong-stat">
          <span>❌ Sai: <strong>{{ stats.wrong }}</strong></span>
        </div>
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

/* Giao diện khung thống kê Đúng / Sai */
.stats-summary {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.stat-item {
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
  background: var(--opt-bg);
}

.correct-stat {
  color: #27ae60;
  border-color: rgba(39, 174, 96, 0.3);
  background: rgba(39, 174, 96, 0.08);
}

.wrong-stat {
  color: #eb5757;
  border-color: rgba(235, 87, 87, 0.3);
  background: rgba(235, 87, 87, 0.08);
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

.grid-item.unanswered {
  background: #ffffff !important;
  color: #1e293b !important;
  border: 1px solid #cbd5e1 !important;
}

.grid-item.correct {
  background: #27ae60 !important;
  color: #ffffff !important;
  border: 1px solid #27ae60 !important;
}

.grid-item.wrong {
  background: #eb5757 !important;
  color: #ffffff !important;
  border: 1px solid #eb5757 !important;
}

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