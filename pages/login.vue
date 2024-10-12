<template>
  <div class="login-container">
    <div class="login-box">
      <div class="upper-container">
        <div class="logo-container">
          <img src="../assets/aladiaLogo.png" alt="Aladia Logo" class="logo" />
        </div>
        <div class="text-container">
          <h2>Welcome to Aladia,</h2>
          <p>Create or access your account from here</p>
        </div>
      </div>

      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'; // Adjust path as necessary

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
}

.login-box {
  background: linear-gradient(90deg, #000, #222, #000); /* Gradient for the flag-like effect */
  padding: 40px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); /* Shadow around the container */
  animation: waveEffect 5s infinite; /* Keep the waving flag animation */

  /* Static black-and-white mixed border */
  border: 2px solid; 
  border-image: linear-gradient(45deg, black, white) 1; /* Black and white gradient for border */
}

@keyframes waveEffect {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.upper-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  
  background-color: #131212;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.logo-container {
  text-align: center;
  margin-right: 10px;
}

.logo {
  width: 100px;
  border-radius: 50%;
  height: auto;
}

.text-container {
  text-align: center;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
}

p {
  text-align: center;
  color: #bbb;
  margin-bottom: 20px;
}


</style>
