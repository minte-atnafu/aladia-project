<template>
    <div class="verification-page">
      <VerificationModalOrganism :logoSrc="logoSrc" />
    </div>
  </template>
  
  <script setup>
  import VerificationModalOrganism from '~/components/organisms/VerificationModalOrganism.vue';
  import logoSrc from '@/assets/aladiaLogo.png'
  </script>
  
  <style scoped>
  .verification-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  