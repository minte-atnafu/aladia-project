<template>
    <div class="logo">
      <IconAtom :src="logoSrc" alt="Aladia Logo" />
    </div>
  </template>
  
  <script>
  import IconAtom from '@/components/atoms/IconAtom.vue';
  
  export default {
    components: {
      IconAtom,
    },
    props: {
      logoSrc: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .logo {
    text-align: center;
    margin-bottom: 30px;
  }
  </style>
  