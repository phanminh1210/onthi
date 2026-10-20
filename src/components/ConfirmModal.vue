<script setup lang="ts">
defineProps<{
  answeredCount: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <div class="modal-overlay" @click.self="emit('cancel')">
    <div class="modal-content">
      <h3>Xác nhận nộp bài thi?</h3>
      <p>Bạn đã hoàn thành <strong>{{ answeredCount }}/{{ total }}</strong> câu hỏi.</p>
      <p v-if="answeredCount < total" class="warning-text">
        ⚠️ Vẫn còn {{ total - answeredCount }} câu chưa trả lời!
      </p>

      <div class="modal-actions">
        <button class="btn btn-cancel" @click="emit('cancel')">Làm tiếp</button>
        <button class="btn btn-confirm" @click="emit('confirm')">Xác nhận nộp</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 28px;
  border-radius: 16px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 20px 40px var(--shadow-color);
  color: var(--text-color);
  transition: background-color 0.3s ease;
}

.modal-content h3 {
  margin-top: 0;
  font-size: 20px;
}

.warning-text {
  color: #eb5757;
  font-weight: 600;
  font-size: 14px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn {
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.btn-cancel {
  background: var(--opt-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.btn-confirm {
  background: #27ae60;
  color: #ffffff;
}
</style>