<template>
  <button class="social-button" @click="$emit('click')">
    <img :src="iconSrc" alt="Social Icon" class="icon" />
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.social-button {
  display: flex;
  align-items: center; /* Center vertically */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.icon {
  width: 24px; /* Adjust as needed */
  height: 24px; /* Adjust as needed */
  margin-right: 8px; /* Space between icon and text */
}

.button-label {
  color: white; /* Adjust the text color as needed */
}
</style>
