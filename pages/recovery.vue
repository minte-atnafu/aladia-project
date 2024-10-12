<template>
  <div class="password-recovery">
    <div class="recovery-container">
      <!-- Header -->
      <div class="header">
        <nuxt-link to="/login" class="back-link">
          <span>&larr;</span> Back to Log in
        </nuxt-link>
        <h2>Password Recovery</h2>
      </div>

      <!-- Google Recovery Section -->
      <div class="google-recovery">
        <div class="google-icon">
          <img src="@/assets/aladiaLogo.png" alt="Google Logo" />
        </div>
        <div class="google-text">
          <h3>Add a new password</h3>
          <p>Your account uses Google Sign-in.<br />Add a new password.</p>
        </div>
      </div>

      <!-- Recovery Info -->
      <div class="recovery-info">
        <p>Recovery link sent to:</p>
        <p class="email">paulcoggh@alaldia.io</p>
      </div>

      <!-- Icons Section -->
      <div class="icon-section">
        <img src="@/assets/aladiaLogo.png" alt="Gold Icon" class="icon aladia" />
        <img src="@/assets/email-icon.png" alt="Email Icon" class="icon message" />
        <img src="@/assets/lock-icon.png" alt="Lock Icon" class="icon lock" />
      </div>

      <!-- Send Link Button -->
      <div class="button-wrapper">
        <button class="send-link-btn">Send Link</button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Container styling */
.password-recovery {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height */
  padding: 50px 0; /* Added padding to create difference */
  background-color: #121212;
}

.recovery-container {
  background-color: #1c1c1c;
  padding: 40px;
  width: 400px;
  height: 600px;  /* Recovery container height remains fixed */
  border-radius: 10px;
  text-align: center;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Space between content and button */
}

/* Header styling */
.header {
  margin-bottom: 30px;
}

.header h2 {
  margin: 0;
  font-size: 20px;
  color: white;
}

.back-link {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #999;
  text-decoration: none;
  font-size: 15px;
}

.back-link:hover {
  color: #fff;
}

/* Google Recovery Section */
.google-recovery {
  display: flex;
  align-items: center;
  background-color: #1c1c1c;
  border: 2px solid red;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 30px;
}

.google-icon img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.google-text h3 {
  margin: 0;
  font-size: 16px;
}

.google-text p {
  font-size: 14px;
  margin: 5px 0 0 0;
}

/* Recovery Info */
.recovery-info {
  text-align: left;
  margin-bottom: 30px;
}

.recovery-info p {
  margin: 0;
  font-size: 13px;
}

.recovery-info .email {
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

/* Icons Section */
.icon-section {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;  /* Move the icons down */
  margin-bottom: 50px; /* Increase bottom margin for more spacing */
}
.message{
  margin-top: 60px;
 
}
.lock{
  margin-top: 60px;
}

.icon {
  width: 60px;  /* Increased size */
  height: 60px;
}
.aladia{
  width:120px;
  height:120px;
}
/* Button Wrapper to stick button to the bottom */
.button-wrapper {
  margin-top: auto; /* Ensure button stays at the bottom */
  text-align: center;
}

/* Send Link Button */
.send-link-btn {
  width: 100%;
  padding: 15px;
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.send-link-btn:hover {
  background-color: #2d5b8d;
}
</style>
