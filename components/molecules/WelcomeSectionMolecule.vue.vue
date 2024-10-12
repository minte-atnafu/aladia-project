<template>
  <div class="welcome-section">
    <div class="welcome-container">
      <img class="logo" :src="logoSrc" alt="Aladia Logo" />
      <div class="welcome-text">
        <h3>Welcome to Aladia</h3>
        <p>Create or access your Account from here</p>
      </div>
    </div>
  </div>
</template>

<script>
import logoSrc from '@/assets/aladiaLogo.png'; // Correctly import the image

export default {
  data() {
    return {
      logoSrc, // Use the imported image
    };
  },
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

.logo {
  width: 60px;
  margin-right: 20px;
}

.welcome-text h3 {
  font-size: 18px;
  margin: 0;
}

.welcome-text p {
  font-size: 14px;
  color: #b0b0b0;
}
</style>
