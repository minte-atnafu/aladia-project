<template>
    <div class="login-page">
      <LoginOrganism 
        :logoSrc="logoSrc" 
        :emailIcon="emailIcon" 
        :googleIcon="googleIcon" 
        :facebookIcon="facebookIcon" 
        :appleIcon="appleIcon" 
      />
    </div>
  </template>
  
  <script>
  import LoginOrganism from '@/components/organisms/LoginOrganism.vue';
  
  export default {
    components: { LoginOrganism },
    data() {
      return {
        logoSrc: '@/assets/logo.png',
        emailIcon: '@/assets/emailIcon.png',
        googleIcon: '@/assets/googleLogo.png',
        facebookIcon: '@/assets/facebookLogo.png',
        appleIcon: '@/assets/appleLogo.png'
      };
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('@/assets/blackpart.png') no-repeat center center;
    background-size: cover;
  }
  </style>
  