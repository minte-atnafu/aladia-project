<template>
    <div class="info-message">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <p>{{ instruction }}</p>
      
      <!-- Code Input Fields -->
      <div class="code-inputs">
        <input
          type="text"
          maxlength="1"
          class="code-input"
          v-for="n in 6"
          :key="n"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Aladia company',
      },
      message: {
        type: String,
        default: 'Thanks for joining Aladia',
      },
      instruction: {
        type: String,
        default: 'Please enter below the 6-digit code we sent you through your registration e-mail:',
      },
    },
  };
  </script>
  
  <style scoped>
  .info-message h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .info-message p {
    color: #ccc;
    font-size: 16px;
  }
  
  /* Code input fields styling */
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
  </style>
  