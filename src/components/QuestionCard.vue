<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { Question } from '../data/questions'

const props = defineProps<{
  question: Question
  currentIndex: number
  totalQuestions: number
  savedAnswer?: number | number[]
  isSubmitted: boolean
}>()

const emit = defineEmits<{
  (e: 'selectAnswer', answer: number | number[]): void
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'submit'): void
}>()

const isEvaluating = ref(false)

// Trạng thái câu hỏi đã được làm / chốt đáp án chưa
const isAnswered = computed(() => {
  return props.savedAnswer !== undefined
})

// Quản lý các đáp án đang tick tạm thời cho câu hỏi nhiều lựa chọn (trước khi bấm Xác nhận)
const tempMultipleSelected = ref<number[]>([])

// Kiểm tra xem câu hỏi hiện tại có phải câu hỏi nhiều đáp án không
const isMultipleChoice = computed(() => {
  return Array.isArray(props.question.correctAnswer)
})

// Khi chuyển câu hỏi hoặc props thay đổi
watch(() => [props.question.id, props.savedAnswer], () => {
  isEvaluating.value = false
  if (isMultipleChoice.value) {
    if (Array.isArray(props.savedAnswer)) {
      tempMultipleSelected.value = [...props.savedAnswer]
    } else {
      tempMultipleSelected.value = []
    }
  } else {
    tempMultipleSelected.value = []
  }
}, { immediate: true })

// Xử lý khi click vào ô đáp án
function handleChooseOption(index: number) {
  // Nếu bài thi đã nộp, câu hỏi đã làm rồi, hoặc đang trong 0.5s chấm bài -> KHÔNG CHO TÁC ĐỘNG
  if (props.isSubmitted || isAnswered.value || isEvaluating.value) return

  if (isMultipleChoice.value) {
    // Câu hỏi nhiều lựa chọn: Tick / Bỏ tick tạm thời
    const pos = tempMultipleSelected.value.indexOf(index)
    if (pos > -1) {
      tempMultipleSelected.value.splice(pos, 1)
    } else {
      tempMultipleSelected.value.push(index)
    }
  } else {
    // Câu hỏi 1 đáp án: Chọn -> Bật hiệu ứng chấm 0.5s -> Lưu & Khóa
    isEvaluating.value = true
    setTimeout(() => {
      isEvaluating.value = false
      emit('selectAnswer', index)
    }, 500)
  }
}

// Xác nhận đáp án cho câu hỏi nhiều lựa chọn
function handleConfirmMultiple() {
  if (tempMultipleSelected.value.length === 0 || isAnswered.value || props.isSubmitted || isEvaluating.value) return

  isEvaluating.value = true
  setTimeout(() => {
    isEvaluating.value = false
    emit('selectAnswer', [...tempMultipleSelected.value])
  }, 500)
}

// Kiểm tra option có đang được chọn không
function isOptSelected(index: number): boolean {
  if (isAnswered.value) {
    if (Array.isArray(props.savedAnswer)) {
      return props.savedAnswer.includes(index)
    }
    return props.savedAnswer === index
  }

  if (isMultipleChoice.value) {
    return tempMultipleSelected.value.includes(index)
  }

  return false
}

// Lấy class để định dạng màu sắc (Đúng / Sai / Chọn)
function getOptionClass(index: number) {
  const isSelected = isOptSelected(index)

  // Đã trả lời (hoặc đã nộp bài)
  if (isAnswered.value || props.isSubmitted) {
    const isCorrectOpt = isMultipleChoice.value
      ? (props.question.correctAnswer as number[]).includes(index)
      : props.question.correctAnswer === index

    return {
      'correct': isCorrectOpt,
      'wrong': isSelected && !isCorrectOpt,
      'disabled': true // Khóa hoàn toàn
    }
  }

  // Chưa trả lời
  return {
    'selected': isSelected,
    'disabled': isEvaluating.value
  }
}

function getOptionKey(index: number): string {
  return String.fromCharCode(65 + index)
}
</script>

<template>
  <div class="question-card" v-if="question">
    <div class="card-header">
      <div class="tags-group">
        <span class="question-tag">Câu hỏi {{ currentIndex + 1 }}</span>
      </div>
    </div>

    <h3 class="question-title">{{ question.content }}</h3>

    <div class="answers-list">
      <div
        v-for="(answer, idx) in question.answers"
        :key="idx"
        class="answer-item"
        :class="getOptionClass(idx + 1)"
        @click="handleChooseOption(idx + 1)"
      >
        <div class="opt-key">
          <template v-if="isMultipleChoice">
            <input 
              type="checkbox" 
              :checked="isOptSelected(idx + 1)" 
              :disabled="isAnswered || isSubmitted || isEvaluating"
              @click.stop
              @change="handleChooseOption(idx + 1)"
            />
          </template>
          <template v-else>
            {{ getOptionKey(idx) }}
          </template>
        </div>
        <div class="opt-text">{{ answer }}</div>
      </div>
    </div>

    <!-- Nút xác nhận cho câu hỏi nhiều đáp án (chỉ hiện khi CHƯA LÀM) -->
    <div v-if="isMultipleChoice && !isAnswered && !isSubmitted" class="confirm-box">
      <button 
        class="btn btn-confirm" 
        :disabled="tempMultipleSelected.length === 0 || isEvaluating"
        @click="handleConfirmMultiple"
      >
        ✓ Xác nhận đáp án ({{ tempMultipleSelected.length }} đã chọn)
      </button>
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

.tags-group {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.question-tag {
  background: #347bf0;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
}

.type-tag {
  background: #00ff7b;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.locked-tag {
  background: #00ff7b;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
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
  margin-bottom: 20px;
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

.opt-key input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
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
  background: #0ea54d;
  color: #ffffff;
  border-color: #0ea54d;
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

.confirm-box {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}

.btn-confirm {
  background: #0ea54d;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-confirm:hover:not(:disabled) {
  background: #005f2e;
}

.btn-confirm:disabled {
  opacity: 0.5;
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