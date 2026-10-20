<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { questionsData, type Question } from '../data/questions'
import ExamHeader from '../components/ExamHeader.vue'
import QuestionCard from '../components/QuestionCard.vue'
import ExamSidebar from '../components/ExamSidebar.vue'
import ConfirmModal from '../components/ConfirmModal.vue'

const questions = ref<Question[]>([])
const isLoading = ref(true)
const currentIndex = ref(0)
const selectedAnswers = ref<Record<number, number>>({})
const remainingSeconds = ref(60 * 60)
const isSubmitted = ref(false)
const showConfirmSubmit = ref(false)

let timer: ReturnType<typeof setInterval> | undefined

const currentQuestion = computed<Question | null>(() => {
  return questions.value[currentIndex.value] || null
})

const answeredCount = computed(() => Object.keys(selectedAnswers.value).length)

function handleSelectAnswer(answerIndex: number) {
  if (isSubmitted.value || !currentQuestion.value) return

  // 1. Lưu đáp án vừa chọn
  selectedAnswers.value[currentQuestion.value.id] = answerIndex

  // 2. Tự động chuyển sang câu tiếp theo sau 1 giây (1000ms)
  setTimeout(() => {
    if (currentIndex.value < questions.value.length - 1 && !isSubmitted.value) {
      currentIndex.value++
    }
  }, 1000)
}

function goToQuestion(index: number) {
  if (index >= 0 && index < questions.value.length) {
    currentIndex.value = index
  }
}

function submitExam() {
  isSubmitted.value = true
  showConfirmSubmit.value = false
  if (timer) clearInterval(timer)
}

onMounted(() => {
  questions.value = questionsData
  isLoading.value = false

  timer = setInterval(() => {
    if (remainingSeconds.value > 0 && !isSubmitted.value) {
      remainingSeconds.value--
    } else if (remainingSeconds.value === 0 && !isSubmitted.value) {
      submitExam()
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="exam-page">
    <ExamHeader />

    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Đang tải bộ câu hỏi...</p>
    </div>

    <main v-else-if="questions.length > 0 && currentQuestion" class="exam-layout">
      <section class="question-section">
        <div class="exam-heading">
          <div class="question-count">
            Câu hỏi <strong>{{ currentIndex + 1 }}<span>/{{ questions.length }}</span></strong>
          </div>
        </div>

        <QuestionCard
          :question="currentQuestion"
          :current-index="currentIndex"
          :total-questions="questions.length"
          :saved-answer="selectedAnswers[currentQuestion.id]"
          :is-submitted="isSubmitted"
          @select-answer="handleSelectAnswer"
          @prev="goToQuestion(currentIndex - 1)"
          @next="goToQuestion(currentIndex + 1)"
          @submit="showConfirmSubmit = true"
        />
      </section>

      <ExamSidebar
        :total="questions.length"
        :answered-count="answeredCount"
        :current-index="currentIndex"
        :remaining-seconds="remainingSeconds"
        :selected-answers="selectedAnswers"
        :questions="questions"
        :is-submitted="isSubmitted"
        @go-to="goToQuestion"
        @submit="showConfirmSubmit = true"
      />
    </main>

    <ConfirmModal
      v-if="showConfirmSubmit"
      :answered-count="answeredCount"
      :total="questions.length"
      @confirm="submitExam"
      @cancel="showConfirmSubmit = false"
    />
  </div>
</template>

<style scoped>
.exam-page {
  min-height: 100vh;
  background-color: var(--bg-page);
  color: var(--text-color);
  padding: 0 5%;
  font-family: sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 15px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top-color: #347bf0;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.exam-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 28px;
  padding: 30px 0;
}

.exam-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.eyebrow {
  color: #347bf0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.exam-heading h2 {
  margin: 8px 0;
  font-size: 24px;
  color: var(--text-color);
}

.exam-heading p {
  color: var(--text-sub);
  margin: 0;
  font-size: 14px;
}

.question-count {
  text-align: right;
  color: var(--text-sub);
  font-size: 12px;
}

.question-count strong {
  color: var(--text-color);
  font-size: 20px;
}

@media (max-width: 900px) {
  .exam-layout {
    grid-template-columns: 1fr;
  }
}
</style>