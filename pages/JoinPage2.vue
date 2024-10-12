<template>
    <div class="container">
      <JoinCardOrganism :userName="userName" :logoSrc="logoSrc" />
    </div>
  </template>
  
  <script>
  import JoinCardOrganism from '@/components/organisms/JoinCardOrganism.vue';
  import logoSrc from '@/assets/aladiaLogo.png';
  
  export default {
    components: {
      JoinCardOrganism,
    },
    data() {
      return {
        userName: "Test Name",
        logoSrc,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: rgb(21, 20, 20);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 20px;
  }
  </style>
  