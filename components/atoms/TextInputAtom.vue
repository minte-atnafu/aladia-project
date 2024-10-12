<template>
    <div class="input-container">
      <img :src="iconSrc" alt="icon" class="icon" />
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      iconSrc: String,
      type: String,
      placeholder: String,
      modelValue: String,
    },
    emits: ['update:modelValue'],
  };
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
  }
  
  .icon {
    width: 20px;
    margin-right: 10px;
  }
  
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
  }
  </style>
  