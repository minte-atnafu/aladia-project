<template>
  <div class="login-organism">
    <!-- Welcome Section -->
    <WelcomeSectionMolecule :logoSrc="logoSrc" />
    
    <!-- TextAtom for Enter your email -->
    <TermsAtom text="Enter your Email" />
    
    <!-- Input Section (for email) -->
    <EmailInputMolecule :iconSrc="emailIcon" />
    
    <!-- ButtonAtom with clickAction prop -->
    <ButtonAtom :clickAction="login">
      Enter
    </ButtonAtom>
    
    <!-- DividerAtom for the "or" divider -->
    <DividerAtom />
    
    <!-- Social Media Login Buttons -->
    <SocialButtonsMolecule 
      :googleIcon="googleIcon" 
      :facebookIcon="facebookIcon" 
      :appleIcon="appleIcon" 
    />

    <!-- Terms and Conditions Link -->
    <TermsAtom text="Terms & Conditions" />
  </div>
</template>

<script>
import WelcomeSectionMolecule from '@/components/molecules/WelcomeSectionMolecule.vue';
import EmailInputMolecule from '@/components/molecules/EmailInputMolecule.vue';
import SocialButtonsMolecule from '@/components/molecules/SocialButtonsMolecule.vue';
import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
import DividerAtom from '@/components/atoms/DividerAtom.vue';
import TermsAtom from '@/components/atoms/TermsAtom.vue';

// Use import to bring in images
import googleIcon from '@/assets/google.logo.png';
import facebookIcon from '@/assets/facebookLogo.png';
import appleIcon from '@/assets/appleLogo.png';

export default {
  components: {
    WelcomeSectionMolecule,
    EmailInputMolecule,
    ButtonAtom,
    DividerAtom,
    SocialButtonsMolecule,
    TermsAtom
  },
  data() {
    return {
      googleIcon,
      facebookIcon,
      appleIcon
    };
  },
  props: {
    logoSrc: String,
    emailIcon: String
  },
  methods: {
    login() {
      console.log("Login clicked");
    }
  }
}
</script>

<style scoped>
.login-organism {
  background-color: #222;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  color: white;
  text-align: center;
}
</style>
