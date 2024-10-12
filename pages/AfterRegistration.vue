<template>
    <div class="verification-page">
      <!-- Verification Modal -->
      <div class="modal-container">
        <div class="modal-content">
          <!-- Back to Log in link -->
          <nuxt-link to="/login" class="back-link">Back to Log in</nuxt-link>
  
          <!-- Logo or Image -->
          <div class="logo-container">
            <img src="@/assets/aladiaLogo.png" alt="Logo" class="logo-img" />
          </div>
  
          <!-- Company Info and Message -->
          <div class="info-message">
            <h2>Aladia company</h2>
            <p>Thanks for joining Aladia</p>
            <p>
              Please enter below the 6-digit code we sent you through your registration e-mail:
            </p>
          </div>
  
          <!-- Code Input Fields -->
          <div class="code-inputs">
            <input type="text" maxlength="1" class="code-input" v-for="n in 6" :key="n" />
          </div>
  
          <!-- Submit Button -->
          <button class="submit-btn">Enter</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Full-screen background */
  .verification-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8); /* Black semi-transparent overlay */
  }
  
  /* Modal container */
  .modal-container {
    background-color: #121212;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Back to Log in */
  .back-link {
    color: #ccc;
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
    font-size: 14px;
  }
  
  .back-link:hover {
    color: white;
  }
  
  /* Logo container */
  .logo-container {
    margin-bottom: 20px;
  }
  
  .logo-img {
    width: 100px;
    height: auto;
  }
  
  /* Company info and message */
  .info-message h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .info-message p {
    color: #ccc;
    font-size: 16px;
  }
  
  /* Code input fields */
  .code-inputs {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  
  .code-input {
    width: 40px;
    height: 40px;
    font-size: 24px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #222;
    color: white;
  }
  
  .code-input:focus {
    border-color: #666;
    outline: none;
  }
  
  /* Submit button */
  .submit-btn {
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #555;
  }
  </style>
  