<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isDark.value = savedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<template>
  <button 
    class="theme-toggle-btn" 
    @click="toggleTheme" 
    :title="isDark ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'"
  >
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  background: var(--opt-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.theme-toggle-btn:hover {
  transform: translateY(-2px);
  border-color: #347bf0;
  background: var(--opt-hover);
}
</style>