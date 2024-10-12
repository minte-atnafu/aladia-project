<template>
    <div class="divider">
      <span>Or</span>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .divider {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  
  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ccc;
  }
  
  span {
    padding: 0 10px;
    color: #ccc;
  }
  </style>
  