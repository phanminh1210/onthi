<script setup lang="ts">
import Home from './views/Home.vue'
</script>

<template>
  <Home />
</template>

<style>
/* Mặc định: Chế độ Tối (Dark Mode) */
:root,
[data-theme="dark"] {
  --bg-page: #071b3a;
  --bg-card: #0d264f;
  --text-color: #eaf1ff;
  --text-sub: #91a4c4;
  --border-color: rgba(255, 255, 255, 0.1);
  --header-bg: #05142c;
  --opt-bg: rgba(255, 255, 255, 0.05);
  --opt-hover: rgba(255, 255, 255, 0.12);
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Chế độ Sáng (Light Mode) */
[data-theme="light"] {
  --bg-page: #f4f7fc;
  --bg-card: #ffffff;
  --text-color: #1e293b;
  --text-sub: #64748b;
  --border-color: #e2e8f0;
  --header-bg: #ffffff;
  --opt-bg: #f8fafc;
  --opt-hover: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.05);
}

html, body {
  background-color: var(--bg-page);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
  min-height: 100vh;
}
</style>