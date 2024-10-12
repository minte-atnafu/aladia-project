<template>
    <div class="password-recovery">
      <div class="recovery-container">
        <!-- Header -->
        <div class="header">
          <nuxt-link to="/login" class="back-link">
            <span>&larr;</span> Back to Log in
          </nuxt-link>
          <h2>Password Recovery</h2>
        </div>
  
        <!-- Google Recovery Section -->
        <GoogleRecoveryMolecule />
  
        <!-- Recovery Info -->
        <RecoveryInfoMolecule :email="email" />
  
        <!-- Icons Section -->
        <div class="icon-section">
          <IconAtom :src="aladiaLogo" alt="Gold Icon" class="aladia" />
          <IconAtom :src="emailIcon" alt="Email Icon" class="message" />
          <IconAtom :src="lockIcon" alt="Lock Icon" class="lock" />
        </div>
  
        <!-- Send Link Button -->
        <div class="button-wrapper">
          <ButtonAtom @click="sendLink">Send Link</ButtonAtom>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import GoogleRecoveryMolecule from '@/components/molecules/GoogleRecoveryMolecule.vue';
  import RecoveryInfoMolecule from '@/components/molecules/RecoveryInfoMolecule.vue';
  import ButtonAtom from '@/components/atoms/ButtonAtom.vue';
  import IconAtom from '@/components/atoms/IconAtom.vue';
  
  // Import the icons here
  import aladiaLogo from '@/assets/aladiaLogo.png';
  import emailIcon from '@/assets/email-icon.png';
  import lockIcon from '@/assets/lock-icon.png';
  
  const email = "paulcoggh@alaldia.io";
  
  const sendLink = () => {
    // Logic to send recovery link
  };
  </script>
  
  <style scoped>
  .password-recovery {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 50px 0;
    background-color: #121212;
  }
  
  .recovery-container {
    background-color: #1c1c1c;
    padding: 40px;
    width: 400px;
    height: 600px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  /* Other styles remain the same */
  .header {
    margin-bottom: 30px;
  }
  .header h2 {
    margin: 0;
    font-size: 20px;
    color: white;
  }
  .back-link {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #999;
    text-decoration: none;
    font-size: 15px;
  }
  .back-link:hover {
    color: #fff;
  }
  
  .icon-section {
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 50px;
  }
  .aladia {
    width: 120px;
    height: 120px;
  }
  </style>
  