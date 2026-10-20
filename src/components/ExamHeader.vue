<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="topbar">
    <div class="brand">
      <div class="brand-icon">Q</div>
      <div class="brand-info">
        <h1>OnThi<span>.app</span></h1>
      </div>
    </div>

    <div class="topbar-actions">
      <div class="exam-label">
        <span class="live-dot"></span>
        BÀI THI ĐANG DIỄN RA
      </div>

      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.topbar {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  background: var(--header-bg);
  padding: 16px 0;
  gap: 20px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #448aff, #2364e8);
  color: #ffffff;
  font-size: 22px;
  font-weight: 800;
  box-shadow: 0 6px 20px rgba(35, 100, 232, 0.3);
  flex-shrink: 0;
}

.brand-info h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--text-color);
}

.brand-info h1 span {
  color: #347bf0;
}

.brand-info p {
  margin: 4px 0 0;
  color: var(--text-sub);
  font-size: 12px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.exam-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-sub);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  background: var(--opt-bg);
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3fe0a0;
  box-shadow: 0 0 10px #3fe0a0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .topbar-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>