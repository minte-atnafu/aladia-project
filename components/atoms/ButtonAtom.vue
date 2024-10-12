<template>
    <button class="enter-button" @click="clickAction">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      clickAction: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .enter-button {
    background: linear-gradient(to right, #800080, #000080);
    width: 50%;
    padding: 10px;
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
  