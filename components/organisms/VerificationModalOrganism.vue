<template>
    <div class="modal-container">
      <BackToLoginMolecule/>
      <IconAtom :src="logoSrc" />
      <InfoMessageMolecule />
      <ButtonAtom :clickAction="submitLogin">
        Enter
      </ButtonAtom>
    </div>
  </template>
  
  <script>
  import IconAtom from '@/components/atoms/IconAtom.vue';
  import InfoMessageMolecule from '@/components/molecules/InfoMessageMolecule.vue';
import BackToLoginMolecule from '../molecules/BackToLoginMolecule.vue';
import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
  
  export default {
    components: {
      BackToLoginMolecule,
      IconAtom,
      InfoMessageMolecule,
       ButtonAtom,
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
   .modal-container {
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
  /* Your existing styles for modal-container can be added here */
  </style>
  