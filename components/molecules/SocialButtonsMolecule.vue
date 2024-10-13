<template>
  <div class="social-buttons">
    <IconAtom 
      :iconSrc="googleIcon" 
      label="Continue with Google" 
      @click="handleGoogleClick" 
    />
    <IconAtom 
      :iconSrc="facebookIcon" 
      label="Continue with Facebook" 
      @click="handleFacebookClick" 
    />
    <IconAtom 
      :iconSrc="appleIcon" 
      label="Continue with Apple" 
      @click="handleAppleClick" 
    />
  </div>
</template>

<script>
import IconAtom from '@/components/atoms/IconAtom.vue';

export default {
  components: { IconAtom },
  props: {
    googleIcon: { type: String, required: true },
    facebookIcon: { type: String, required: true },
    appleIcon: { type: String, required: true }
  },
  methods: {
    handleGoogleClick() {
      console.log('Google button clicked');
    },
    handleFacebookClick() {
      console.log('Facebook button clicked');
    },
    handleAppleClick() {
      console.log('Apple button clicked');
    }
  }
};
</script>

<style scoped>
.social-buttons {
  display: flex;
  flex-direction: column; /* Stack the buttons vertically */
  gap: 10px; /* Space between buttons */
  width: 100%;
  align-items: center; /* Center the buttons horizontally */
}
</style>
