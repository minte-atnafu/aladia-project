<template>
    <div class="terms-section single-line">
      <input type="checkbox" id="terms" v-model="acceptTerms" required />
      <label for="terms">
        I accept <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
      </label>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const acceptTerms = ref(false);
      return { acceptTerms };
    }
  };
  </script>
  
  <style scoped>
  .terms-section.single-line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-color: #1d1d1d;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #333;
  }
  
  .terms-section input[type="checkbox"] {
    margin-right: 10px;
    cursor: pointer;
  }
  
  .terms-section label {
    color: white;
    font-size: 14px;
  }
  
  .terms-section a {
    color: #2d5b8d;
    text-decoration: underline;
    font-weight: bold;
    margin-left: 5px;
  }
  </style>
  