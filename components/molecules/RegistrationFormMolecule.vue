<template>
    <form @submit.prevent="handleRegister">
      <TermsSectionMolecule />
  
      <div class="form-group">
        <label for="name" class="centered-label">Enter your details</label>
        <InputAtom
          id="name"
          v-model="name"
          placeholder="Name"
          :icon="personIcon"
        />
      </div>
  
      <div class="form-group">
        <InputAtom
          id="surname"
          v-model="surname"
          placeholder="Surname"
          :icon="personIcon"
        />
      </div>
  
      <div class="form-group">
        <InputAtom
          id="email"
          v-model="email"
          placeholder="Email"
          :icon="emailIcon"
          type="email"
        />
      </div>
  
      <div class="form-group">
        <InputAtom
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          placeholder="Password"
          :icon="passwordIcon"
        />
        <span class="toggle-password" @click="togglePasswordVisibility(1)">
          <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle Password Visibility" />
        </span>
      </div>
  
      <div class="form-group">
        <InputAtom
          :type="showConfirmPassword ? 'text' : 'password'"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          :icon="passwordIcon"
        />
        <span class="toggle-password" @click="togglePasswordVisibility(2)">
          <img :src="showConfirmPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle Confirm Password Visibility" />
        </span>
      </div>
  
      <ButtonAtom :onClick="handleRegister">Enter</ButtonAtom>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
  import InputAtom from '@/components/atoms/InputAtom.vue';
  import TermsSectionMolecule from './TermsSectionMolecule.vue';
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
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  function handleRegister() {
    if (password.value === confirmPassword.value) {
      console.log('Registration Successful', {
        name: name.value,
        surname: surname.value,
        email: email.value,
      });
    } else {
      console.log('Passwords do not match.');
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
    margin-bottom: 25px;
    position: relative;
  }
  
  .centered-label {
    color: white;
    text-align: center;
    display: block;
    margin-bottom: 15px;
  }
  </style>
  