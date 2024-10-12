<template>
  <form @submit.prevent="submitLogin">
    <div class="form-group">
      <label for="email">Enter your email</label>
      <div class="input-container">
        <img class="icon" src="../assets/email-icon.png" alt="Email Icon" />
        <input  
          type="email"
          id="email"
          placeholder="Email Address"
          v-model="email"
          required
        />
      </div>
    </div>
    <button type="submit" class="submit-btn">Enter</button>

    <div class="divider-container">
      <div class="divider"></div>
      <span class="or-text">Or</span>
      <div class="divider"></div>
    </div>

    <SocialButtons
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
    <p class="terms">Terms & Conditions</p>
  </form>
</template>

<script>
import SocialButtons from './Buttons.vue'; // Ensure the path is correct based on your structure

export default {
  components: {
    SocialButtons,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitLogin() {
      console.log("Logging in with email:", this.email);
      if (this.email) {
        this.$router.push('/Register');
      }
    },
    googleLogin() {
      console.log("Google login");
    },
    facebookLogin() {
      console.log("Facebook login");
    },
    appleLogin() {
      console.log("Apple login");
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  text-align: center; /* Added this line to center the label */
}

.input-container {
  position: relative; /* Position relative to position the icon */
}

.input-container .icon {
  position: absolute; /* Position the icon absolutely */
  left: 10px; /* Adjust the left position as needed */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for perfect centering */
  width: 20px; /* Set width according to your icon size */
  height: 20px; /* Set height according to your icon size */
}

.form-group input {
  width: 100%;
  padding: 10px 10px 10px 40px; /* Add left padding to avoid overlap with the icon */
  border: 1px solid #ccc; /* Optional: border color */
  border-radius: 5px;
  color: black; /* Set text color to black */
  background-color: white; /* Set background color to white */
  box-sizing: border-box; 
}

.submit-btn {
  background: linear-gradient(to right, #450545, #050555);
  width: 100%;
  padding: 10px;
  background-color: #000;
  border: 1px solid #666;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.submit-btn:hover {
  background-color: #000;
}

.divider-container {
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Center vertically */
  margin: 20px 0; /* Vertical spacing */
}

.divider {
  flex: 1; /* Allow the lines to grow */
  height: 2px; /* Set height to make the lines thicker */
  background: linear-gradient(to right, #333 0%, #fff 50%, #fff 51%, #333 100%); /* Gradient to make the lines whiter as they approach "Or" */
  opacity: 1; /* Keep the opacity at full */
}

.or-text {
  padding: 0 10px; /* Spacing around the "Or" text */
  color: #888; /* Text color */
  font-weight: bold; /* Make the text bold */
}

.terms {
  text-align: center;
  margin-top: 20px;
  color: #666;
}
</style>
