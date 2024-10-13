<template>
  <div class="input-container">
    <img :src="iconSrc" alt="icon" class="icon" />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-label="placeholder" <!-- Accessibility improvement -->
    />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true, // Make sure iconSrc is required for this component
    },
    type: {
      type: String,
      default: 'text', // Default input type
    },
    placeholder: {
      type: String,
      default: 'Enter text...', // Default placeholder text
    },
    modelValue: {
      type: String,
      default: '', // Default value for modelValue
    },
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
  border: 1px solid #ccc; /* Added border for better visibility */
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
  padding: 5px; /* Added padding for better usability */
}
</style>
