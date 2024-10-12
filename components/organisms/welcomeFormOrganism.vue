<template>
    <div class="login-container">
      <div class="back-section" @click="goBack">
        <h3>Back to Log in</h3>
      </div>
  
      <WelcomeSectionMolecule />
  
      <InputSectionMolecule />
  
      <ButtonAtom :clickAction="submitLogin">
        Enter
      </ButtonAtom>
    </div>
  </template>
  
  <script>
  import WelcomeSectionMolecule from '@/components/molecules/WelcomeSectionMolecule.vue';
  import InputSectionMolecule from '@/components/molecules/InputSectionMolecule.vue';
  import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
  
  export default {
    components: {
      WelcomeSectionMolecule,
      InputSectionMolecule,
      ButtonAtom,
    },
    methods: {
      goBack() {
        this.$router.push('/login');
      },
      submitLogin() {
        if (!this.password) {
          alert('Please enter your password');
        } else {
          alert('Login Submitted');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: #222;
    padding: 40px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
    border: 2px solid white;
    text-align: center;
    color: white;
    position: relative;
    padding-top: 60px;
  }
  
  .back-section {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    cursor: pointer;
    font-size: 16px;
    color: white;
    text-align: center;
  }
  </style>
  