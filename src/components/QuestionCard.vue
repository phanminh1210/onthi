<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  question: Question
  currentIndex: number
  totalQuestions: number
  savedAnswer?: number
  isSubmitted: boolean
}>()

const emit = defineEmits<{
  (e: 'selectAnswer', answerIndex: number): void
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'submit'): void
}>()

const isEvaluating = ref(false)
const selectedOpt = ref<number | undefined>(props.savedAnswer)

watch(() => props.question.id, () => {
  selectedOpt.value = props.savedAnswer
  isEvaluating.value = false
})

watch(() => props.savedAnswer, (newVal) => {
  selectedOpt.value = newVal
})

function handleChooseOption(index: number) {
  if (props.isSubmitted || isEvaluating.value) return

  selectedOpt.value = index
  isEvaluating.value = true

  // Phát sự kiện chọn đáp án lên component cha (Home.vue)
  emit('selectAnswer', index)

  // Tắt trạng thái đang chấm sau 0.5s để người dùng kịp nhìn rõ đáp án Đúng/Sai
  setTimeout(() => {
    isEvaluating.value = false
  }, 500)
}

function getOptionKey(index: number): string {
  return String.fromCharCode(65 + index)
}
</script>

<template>
  <div class="question-card" v-if="question">
    <div class="card-header">
      <span class="question-tag">Câu hỏi {{ currentIndex + 1 }}</span>
      <span v-if="isEvaluating" class="eval-status">⏳ Đang chấm bài...</span>
    </div>

    <h3 class="question-title">{{ question.content }}</h3>

    <div class="answers-list">
      <div
        v-for="(answer, idx) in question.answers"
        :key="idx"
        class="answer-item"
        :class="{
          'selected': selectedOpt === idx + 1 && !isEvaluating && !isSubmitted,
          'correct': (isSubmitted || (selectedOpt !== undefined && !isEvaluating)) && (idx + 1 === question.correctAnswer),
          'wrong': (isSubmitted || (selectedOpt !== undefined && !isEvaluating)) && (selectedOpt === idx + 1) && (selectedOpt !== question.correctAnswer),
          'disabled': isSubmitted || isEvaluating
        }"
        @click="handleChooseOption(idx + 1)"
      >
        <div class="opt-key">{{ getOptionKey(idx) }}</div>
        <div class="opt-text">{{ answer }}</div>
      </div>
    </div>

    <div class="card-actions">
      <button 
        class="btn btn-secondary" 
        :disabled="currentIndex === 0" 
        @click="emit('prev')"
      >
        ← Câu trước
      </button>

      <button 
        v-if="currentIndex < totalQuestions - 1" 
        class="btn btn-primary" 
        @click="emit('next')"
      >
        Câu tiếp →
      </button>

      <button 
        v-else-if="!isSubmitted" 
        class="btn btn-submit" 
        @click="emit('submit')"
      >
        Nộp bài thi 🚀
      </button>
    </div>
  </div>
</template>

<style scoped>
.question-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.question-tag {
  background: #347bf0;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
}

.eval-status {
  color: #f39c12;
  font-size: 13px;
  font-weight: 600;
}

.question-title {
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 24px;
  white-space: pre-line;
  color: var(--text-color);
}

.answers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.answer-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--opt-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-color);
}

.answer-item:hover:not(.disabled) {
  background: var(--opt-hover);
  border-color: #347bf0;
}

.opt-key {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  font-weight: 700;
  color: var(--text-color);
  flex-shrink: 0;
}

.opt-text {
  flex: 1;
  font-size: 15px;
}

.answer-item.selected {
  border-color: #347bf0;
  background: rgba(52, 123, 240, 0.15);
}

.answer-item.correct {
  background: rgba(39, 174, 96, 0.15) !important;
  border-color: #27ae60 !important;
  color: #27ae60 !important;
}

.answer-item.correct .opt-key {
  background: #27ae60;
  color: #ffffff;
  border-color: #27ae60;
}

.answer-item.wrong {
  background: rgba(235, 87, 87, 0.15) !important;
  border-color: #eb5757 !important;
  color: #eb5757 !important;
}

.answer-item.wrong .opt-key {
  background: #eb5757;
  color: #ffffff;
  border-color: #eb5757;
}

.answer-item.disabled {
  cursor: not-allowed;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.btn {
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--opt-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--opt-hover);
}

.btn-primary {
  background: #347bf0;
  color: #ffffff;
}

.btn-primary:hover {
  background: #2364e8;
}

.btn-submit {
  background: #27ae60;
  color: #ffffff;
}

.btn-submit:hover {
  background: #219653;
}
</style>