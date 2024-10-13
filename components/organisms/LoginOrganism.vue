<template>
  <div class="login-organism">
    <!-- Welcome Section -->
    <WelcomeSectionMolecule :logoSrc="logoSrc" />

    <!-- TextAtom for Enter your email -->
    <TermsAtom text="Enter your Email" />

    <!-- Input Section (for email) -->
    <EmailInputMolecule 
      v-model="email" 
      :iconSrc="emailIcon" 
      @focus="showSuggestions = true" 
      @blur="hideSuggestions"
    />

    <!-- Email Suggestions (only shown when showSuggestions is true) -->
    <ul v-if="showSuggestions && filteredEmails.length" class="email-suggestions">
      <li v-for="suggestion in filteredEmails" :key="suggestion" @click="setSuggestedEmail(suggestion)">
        {{ suggestion }}
      </li>
    </ul>

    <!-- ButtonAtom with clickAction prop -->
    <form @submit.prevent="handleSubmit">
      <ButtonAtom  :clickAction="handleSubmit" type="submit">Enter</ButtonAtom>
    </form>

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
import { ref, computed } from 'vue'; // Import ref and computed from Vue
import { useRouter } from 'vue-router'; // Import useRouter from vue-router
import { store } from '../pages/Store.js'; // Adjust the path according to your structure

// Import images
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
    TermsAtom,
  },
  devtools: {
    enabled: false, // Disable dev tools during local development
  },
  setup() {
    const email = ref(''); // Reactive reference for the email input
    const emailSuggestions = ref(['test@example.com', 'user@example.com']); // Example email suggestions
    const showSuggestions = ref(false); // Flag to control showing suggestions
    const router = useRouter(); // Create router instance

      const checkEmailRegistration = async (email) => {
  // Make sure store.isEmailRegistered doesn't store a function in global state
  return store.isEmailRegistered(email);
   };

    // Compute filtered suggestions based on the current email input
    const filteredEmails = computed(() => {
      return emailSuggestions.value.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(email.value.toLowerCase())
      );
    });

    // Email validation function
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    // Function to set the clicked email suggestion
    const setSuggestedEmail = (suggestion) => {
      email.value = suggestion;
      showSuggestions.value = false; // Hide suggestions when an email is clicked
    };

    // Hide suggestions on blur (with slight delay to allow click)
    const hideSuggestions = () => {
      setTimeout(() => {
        showSuggestions.value = false;
      }, 200); // Add delay to allow selecting the suggestion
    };

    // Submit handler with validation and navigation logic
    const handleSubmit = async () => {
      if (!email.value.trim()) {
        alert('Please enter a valid email address.');
        return;
      }

      if (!isValidEmail(email.value.trim())) {
        alert('Please enter a valid email address.');
        return;
      }

      try {
  // Perform the email registration check and store the result without passing functions.
  const isRegistered = await checkEmailRegistration(email.value);
  if (isRegistered) {
    router.push('/JoinPage2');
  } else {
    router.push({ path: '/register', query: { email: email.value } });
  }
} catch (error) {
  console.error('Error checking email registration:', error);
}

    };

    return {
      email,
      handleSubmit,
      googleIcon,
      facebookIcon,
      appleIcon,
      filteredEmails,
      showSuggestions, // Use for toggling suggestions visibility
      setSuggestedEmail, // Used directly in template for event handling
      hideSuggestions, // Used for blur event to hide suggestions
    };
  },
};
</script>

<style scoped>
.login-organism {
  background-color: #171616;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  border: 2px solid #3d3c3c;
}

.email-suggestions {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  background-color: #333;
  color: white;
  border-radius: 5px;
  width: 100%;
}

.email-suggestions li {
  padding: 5px 10px;
  cursor: pointer;
}

.email-suggestions li:hover {
  background-color: #444;
}
</style>
