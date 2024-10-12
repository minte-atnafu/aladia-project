<template>
    <div class="social-btns">
      <button @click="$emit('googleLogin')" class="social-btn google">
        <img src="../assets/google.logo.png" alt="Google" /> Continue with Google
      </button>
      <button @click="$emit('facebookLogin')" class="social-btn facebook">
        <img  class="fa" src="../assets/facebookLogo.png" alt="Facebook" /> Continue with Facebook
      </button>
      <button @click="$emit('appleLogin')" class="social-btn apple">
        <img class="ap" src="../assets/appleLogo.png" alt="Apple" /> Continue with Apple
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialButtons',
  };
  </script>
  
  <style scoped>
  .social-btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    background-color: #000;
    border: 1px solid #555;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    
  }

  .fa{
    padding-left: 15px;
  }
  .ap{
    padding-right: 15px;
  }
  
  .social-btn img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  </style>
