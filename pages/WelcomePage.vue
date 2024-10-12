<template>
    <div class="login-page">
      <div class="login-container">
        <!-- Back to Login Section -->
        <div class="back-section" @click="goBack">
          <h3>Back to Log in</h3>
        </div>
  
        <!-- Logo and Welcome Text Section -->
        <div class="welcome-section">
          <div class="welcome-container">
            <img class="logo" src="~/assets/aladiaLogo.png" alt="Aladia Logo" />
            <div class="welcome-text">
              <h3>WellCome to Aladia</h3>
              <p>Create or access your Account from here</p>
            </div>
          </div>
        </div>
  
        <!-- Password Input Section -->
        <div class="input-section">
          <div class="input-container">
            <img class="icon" src="~/assets/password-icon.png" alt="Password Icon" />
            <input type="password" v-model="password" placeholder="Password" />
          </div>
          <p class="forgot-password" @click="forgotPassword">Forgot Password</p>
        </div>
  
        <!-- Enter Button -->
        <button class="enter-button" @click="submitLogin">
          Enter
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const router = useRouter();
  const password = ref('');
  
  function goBack() {
    router.push('/login'); // Adjust the route to where you want to send users
  }
  
  function forgotPassword() {
    alert('Forgot Password Clicked'); // Replace with actual functionality
  }
  
  function submitLogin() {
    if (!password.value) {
      alert('Please enter your password');
      return;
    }
    // Implement your login logic here
    alert('Login Submitted');
  }
  </script>
  
  <style scoped>
  /* General Page Styling */
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #111; /* Dark background */
  }
  
  .login-container {
    background-color: #222;
    padding: 40px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5); /* Adding white shadow */
    border: 2px solid white; /* White border */
    text-align: center;
    color: white;
    position: relative;
    padding-top: 60px; /* Adding top padding to accommodate back-section */
  }
  
  .back-section {
    position: absolute; /* Position it absolutely inside the container */
    top: 10px; /* Adjust the top edge */
    left: 0;
    right: 0;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    text-align: center;
    z-index: 1;
  }
  
  /* Welcome Section Styling */
  .welcome-section {
    margin-bottom: 60px;
  }
  
  .welcome-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Adding shadow */
  }
  
  .logo {
    width: 60px;
    margin-right: 20px; /* Space between the logo and text */
  }
  
  .welcome-text h3 {
    font-size: 18px;
    margin: 0;
  }
  
  .welcome-text p {
    font-size: 14px;
    color: #b0b0b0;
  }
  
  /* Input Section Styling */
  .input-section {
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    background-color: #333;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    color:black;
    background-color: white;
    border: 0.5px solid white; /* Adding white border to input container */
  }
  
  .input-container img {
    width: 20px;
    margin-right: 10px;
  }
  
  .input-container input {
    width: 100%;
    background: none;
    border: none;
    color: white; /* White text for input field */
    outline: none;
  }
  
  .forgot-password {
    cursor: pointer;
    font-size: 12px;
    color: #888;
  }
  
  /* Enter Button Styling */
  .enter-button {
    width: 100%;
    padding: 10px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .enter-button:hover {
    background-color: #777;
  }
  </style>
  