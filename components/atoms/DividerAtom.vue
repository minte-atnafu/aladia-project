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
  width: 100%; /* Ensure the divider takes full width */
}

.divider::before,
.divider::after {
  content: '';
  flex-grow: 1; /* Make sure the lines grow and take up space */
  height: 3px; /* Set the height of the lines */
  background: linear-gradient(to right, #0f0f0f 0%, #fff 50%, #fff 51%, #0f0f0f 100%); /* Gradient to make the lines whiter as they approach "Or" */
}

span {
  padding: 0 10px;
  color: #ffffff; /* Change text color to white for better contrast */
  z-index: 1; /* Ensure the text is above the lines */
  background: #222; /* Background for the text to contrast against the lines */
  padding: 5px 10px; /* Add some padding around the text */
  border-radius: 4px; /* Optional: Rounded corners for the text background */
}
</style>
