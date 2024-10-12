<template>
    <div class="recovery-info">
      <p>Recovery link sent to:</p>
      <p class="email">{{ email }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['email']);
  </script>
  
  <style scoped>
  .recovery-info {
    text-align: left;
    margin-bottom: 30px;
  }
  .recovery-info p {
    margin: 0;
    font-size: 13px;
  }
  .recovery-info .email {
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
  }
  </style>
  