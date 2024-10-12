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
    color: #ccc;
    font-size: 12px;
    margin-top: 20px;
  }
  </style>
  