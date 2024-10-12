<template>
    <div class="back-to-login">
      <nuxt-link to="/login">
        <TextAtom text="Back to Log in" customClass="login-text"/>
      </nuxt-link>
    </div>
  </template>
  
  <script>
  import TextAtom from '@/components/atoms/TextAtom.vue';
  
  export default {
    components: {
      TextAtom,
    },
  };
  </script>
  
  <style scoped>
  .back-to-login {
    margin-bottom: 40px;
    text-align: center;
    padding-top: 0;
  }
  
  .login-text {
    padding-top: 0;
    text-decoration: none;
  }
  </style>
  