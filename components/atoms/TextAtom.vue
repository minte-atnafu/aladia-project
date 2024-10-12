<template>
    <p :class="['text-atom', customClass]" @click="$emit('click')">{{ text }}</p>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      customClass: {
        type: String,
        default: '', // Allow a custom class to be passed
      },
    },
  };
  </script>
  
  <style scoped>
  .text-atom {
    cursor: pointer;
    color: #eff2f5;
    font-size: 16px;
    margin: 10px 0;
  }
  
  .text-atom:hover {
    text-decoration: underline;
  }
  </style>
  