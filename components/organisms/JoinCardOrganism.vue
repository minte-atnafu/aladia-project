<template>
    <div class="join-card">
      <BackToLoginMolecule />
      <TextAtom :text="userName" tag="h2"  customClass="two"/>
      <TextAtom text="Thanks for joining Aladia" customClass="one"/>
      <LogoMolecule :logoSrc="logoSrc" />
      <router-link to="/marketplace">
        <ButtonAtom>Enter Marketplace</ButtonAtom>
      </router-link>
    </div>
  </template>
  
  <script>
  import BackToLoginMolecule from '@/components/molecules/BackToLoginMolecule.vue';
  import TextAtom from '@/components/atoms/TextAtom.vue';
  import LogoMolecule from '@/components/molecules/LogoMolecule.vue';
  import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
  
  export default {
    components: {
      BackToLoginMolecule,
      TextAtom,
      LogoMolecule,
      ButtonAtom,
    },
    props: {
      userName: {
        type: String,
        required: true,
      },
      logoSrc: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .join-card {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 50px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    max-width: 500px;
    width: 100%;
    color: white;
  }
  .one{
    font-size: 20px;
    
  }
  .text-atom:hover{
    text-decoration: none;
    cursor:default;
  }
  .two{
    font-size: 40px;
  }
  </style>
  