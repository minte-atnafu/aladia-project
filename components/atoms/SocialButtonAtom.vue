<template>
    <button class="social-button" @click="$emit('click')">
      <img :src="iconSrc" alt="Social Icon" />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      iconSrc: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .social-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
  .social-button img {
    width: 24px; /* Adjust as needed */
    height: 24px; /* Adjust as needed */
  }
  </style>
  