<template>
    <p>{{ text }}</p>
  </template>
  
  <script>
  export default {
    props: {
      text: String
    }
  }
  </script>
  
  <style scoped>
  p {
    color: #f6f3f3;
    font-size: 16px;
    margin-top: 20px;
  }
  </style>
  