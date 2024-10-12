<template>
  <form @submit.prevent="handleRegister">
    <div class="terms-section single-line">
      <input type="checkbox" id="terms" v-model="acceptTerms" required />
      <label for="terms">
        I accept <a href="#">Terms & Conditions</a> and
        <a href="#">Privacy Policy</a>
      </label>
    </div>

    <div class="form-group">
      <label for="name" class="centered-label">Enter your details</label>
      <div class="input-wrapper">
        <input type="text" id="name" v-model="name" placeholder="Name" required />
        <img :src="personIcon" alt="Name Icon" class="input-icon left-icon" />
      </div>
    </div>

    <div class="form-group">
      <div class="input-wrapper">
        <input type="text" id="surname" v-model="surname" placeholder="Surname" required />
        <img :src="personIcon" alt="Surname Icon" class="input-icon left-icon" />
      </div>
    </div>

    <div class="form-group">
      <div class="input-wrapper">
        <input type="email" id="email" v-model="email" placeholder="Email" disabled />
        <img :src="emailIcon" alt="Email Icon" class="input-icon left-icon" />
      </div>
    </div>

    <div class="form-group">
      <div class="input-wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <img :src="passwordIcon" alt="Confirm Password Icon" class="input-icon left-icon" />
        <span class="toggle-password" @click="togglePasswordVisibility(1)">
          <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle Password Visibility" />
        </span>
      </div>
    </div>

    <div class="form-group">
      <div class="input-wrapper">
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <img :src="passwordIcon" alt="Confirm Password Icon" class="input-icon left-icon" />
        <span class="toggle-password" @click="togglePasswordVisibility(2)">
          <img :src="showConfirmPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle Confirm Password Visibility" />
        </span>
      </div>
    </div>
    <nuxt-link to="/AfterRegistration">
    <button type="submit" class="enter-btn">Enter</button>
  </nuxt-link>
  </form>
</template>

<script setup>
import { ref } from 'vue';

// Import the assets
import personIcon from '@/assets/person-icon.png';
import emailIcon from '@/assets/email-icon.png';
import passwordIcon from '@/assets/password-icon.png';
import eyeOpenIcon from '@/assets/eye-open.png';
import eyeClosedIcon from '@/assets/eye-closed.png';

const name = ref('');
const surname = ref('');
const email = ref('justatest@gmail.com'); // Example email
const password = ref('');
const confirmPassword = ref('');
const acceptTerms = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

function handleRegister() {
  if (password.value === confirmPassword.value && acceptTerms.value) {
    console.log('Registration Successful', {
      name: name.value,
      surname: surname.value,
      email: email.value,
    });
  } else {
    console.log('Passwords do not match or terms not accepted.');
  }
}

function togglePasswordVisibility(field) {
  if (field === 1) {
    showPassword.value = !showPassword.value;
  } else if (field === 2) {
    showConfirmPassword.value = !showConfirmPassword.value;
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 25px; /* Increased gap between form components */
  position: relative;
}

.centered-label {
  color: white; /* Label color white */
  text-align: center;
  display: block;
  margin-bottom: 15px; /* Add space between label and input */
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  padding: 10px 40px 10px 40px; /* Leave space for the icons inside */
  background-color: white; /* White background for input */
  border: 1px solid #333;
  border-radius: 6px;
  color: black; /* Black text color */
  font-size: 14px;
  outline: none;
}

input::placeholder {
  color: #555; /* Darker placeholder for visibility */
}

.input-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.left-icon {
  left: 10px;
}

.toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.toggle-password img {
  width: 20px;
  height: 20px;
}

.enter-btn {
  background: linear-gradient(to right, #800080, #000080);
  width: 100%;
  padding: 12px;
  background-color: #333;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.enter-btn:hover {
  background-color: #444;
}

.terms-section.single-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #1d1d1d;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #333;
  flex-direction: row; /* Ensures the elements are on a single line */
}

.terms-section input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}

.terms-section label {
  color: white;
  font-size: 14px;
}

.terms-section a {
  color: #2d5b8d;
  text-decoration: underline;
  font-weight: bold;
  margin-left: 5px;
}
</style>
