<template>
  <div class="input-container">
    <img :src="iconSrc" alt="Input Icon" class="icon" v-if="iconSrc" />
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
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
  width: 20px; /* Ensure the width is appropriate */
  margin-right: 10px;
}

.input-field {
  flex-grow: 1;
  border: none;
  outline: none;
  color: #333;
  padding: 5px; /* Added padding to align the text properly */
}
</style>
