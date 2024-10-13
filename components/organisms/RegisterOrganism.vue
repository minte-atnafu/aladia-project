<template>
    <div class="register-page">
      <div class="register-container">
        <div class="backer" @click="goToLogin">
          <h3 class="back-text"><span class="back-arrow">&lt;</span> Back To Login</h3>
        </div>
        <div class="header-section">
          <div class="logo-container">
            <img class="profile-picture" src="@/assets/aladiaLogo.png" alt="Aladia Logo" />
          </div>
          <div class="text-container">
            <p class="welcome-message">Nice to meet you,</p>
            <p class="instruction">Upload a profile picture and complete your presentation</p>
          </div>
        </div>
  
        <RegistrationFormMolecule />
        <p class="terms-text">Terms & Conditions</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import RegistrationFormMolecule from '@/components/molecules/RegistrationFormMolecule.vue';
  
  const router = useRouter();
  
  function goToLogin() {
    router.push('/login'); // Navigate to the login page
  }
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121111;
  }
  
  .register-container {
    padding: 20px;
    background-color: #1b1a1a;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    min-height: 100vh;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .backer {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .back-text {
    display: flex;
    align-items: center;
    color: white;
    font-size: 16px;
  }
  
  .header-section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo-container {
    width: 120px;
    height: 100px;
    background-color: #000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
  
  .profile-picture {
    width: 110px;
    height: 80px;
    object-fit: contain;
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
  }
  
  .welcome-message {
    font-size: 18px;
    color: white;
    margin-bottom: 5px;
  }
  
  .instruction {
    font-size: 14px;
    color: #b0b0b0;
    margin-bottom: 20px;
  }
  
  .terms-text {
    text-align: center;
    color: #888;
    font-size: 12px;
  }
  </style>
  