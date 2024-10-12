<template>
    <div class="email-input-molecule">
      <TextInputAtom
        :iconSrc="emailIcon"
        type="email"
        placeholder="Email Address"
        v-model="email"
      />
    </div>
  </template>
  
  <script>
  import TextInputAtom from '@/components/atoms/TextInputAtom.vue';
  import emailIcon from '@/assets/email-icon.png'; // Import the image
  
  export default {
    components: { TextInputAtom },
    data() {
      return {
        email: '',
        emailIcon, // Use the imported image as a data property
      };
    },
  };
  </script>
  
  <style scoped>
  .email-input-molecule {
    margin-bottom: 20px;
  }
  </style>
  