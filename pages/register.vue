<template>
  <div class="register-page">
    <div class="register-container">
      <div class="backer" @click="goToLogin">
        <h3 class="back-text"><span class="back-arrow">&lt;</span> Back To Login</h3>
      </div>
      <div class="header-section">
        <div class="logo-container">
          <img
            class="profile-picture"
            src="../assets/aladiaLogo.png"
            alt="Aladia Logo"
          />
        </div>
        <div class="text-container">
          <p class="welcome-message">Nice to meet you,</p>
          <p class="instruction">
            Upload a profile picture and complete your presentation
          </p>
        </div>
      </div>

      <!-- RegistrationForm component -->
      <RegistrationForm />

      <p class="terms-text">Terms & Conditions</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Import the useRouter function
import RegistrationForm from '~/components/RegisterForm.vue';

const router = useRouter(); // Initialize the router

function goToLogin() {
  router.push('/login'); // Navigate to the login page
}
</script>

<style scoped>
@keyframes flag-wave {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111010;
}
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; Full viewport height */
  background-color: #121111;
}

.register-container {
  padding: 20px; /* Reduced padding */
  background-color: #1b1a1a;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  min-height: 100vh;/* Reduced min-height  */
  /* height: auto; Let the content determine the final height */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6); /* Added deeper shadow */
  position: relative; /* Position relative for absolute children */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Thin light border */
  transition: box-shadow 0.3s ease, border-color 0.3s ease; /* Smooth transition for hover */
  
  /* Add animated background */
  background: linear-gradient(270deg, #1b1a1a, #000000, #1b1a1a);
  background-size: 400% 400%; /* This is for smooth color transitions */
  animation: flag-wave 6s ease-in-out infinite; /* Add wave effect */
}

.register-container:hover {
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.8); /* Enhance shadow on hover */
  border-color: rgba(255, 255, 255, 0.4); /* Light up border on hover */
}

/* Keep all other properties unchanged */
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

.back-arrow {
  margin-right: 5px;
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
  margin-top: 20px;
}
</style>
