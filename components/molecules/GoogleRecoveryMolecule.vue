<template>
    <div class="google-recovery">
      <div class="google-icon">
        <IconAtom :src="aladiaLogo" alt="Google Logo" />
      </div>
      <div class="google-text">
        <h3>Add a new password</h3>
        <p>Your account uses Google Sign-in.<br />Add a new password.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import IconAtom from '@/components/atoms/IconAtom.vue';
  import aladiaLogo from '@/assets/aladiaLogo.png'; // Import the image here
  </script>
  
  <style scoped>
  .google-recovery {
    display: flex;
    align-items: center;
    background-color: #1c1c1c;
    border: 2px solid red;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 30px;
  }
  .google-icon img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  </style>
  