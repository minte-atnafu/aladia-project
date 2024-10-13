<template>
    <div class="login-page">
      <WelcomeFormOrganism/>
    </div>
  </template>
  
  <script>
  import WelcomeFormOrganism from '@/components/organisms/welcomeFormOrganism.vue';
  
  export default {
    components: {
      WelcomeFormOrganism,
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #111;
  }
  </style>
  