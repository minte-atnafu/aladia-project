<template>
  <div class="input-container">
    <img :src="iconSrc" alt="Input Icon" class="icon" />
    <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true, // The parent component must provide this
    },
    iconSrc: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.icon {
  width:20px;
  margin-right: 10px;
}

input {
  flex-grow: 1;
  border: none;
  outline: none;
  color: #333;
}
</style>
