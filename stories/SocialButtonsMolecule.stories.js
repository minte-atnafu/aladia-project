// SocialButtons.stories.js
import SocialButtons from '../../components/atoms/SocialButtonAttom.vue'; // Adjust the path as necessary
import googleIcon from '@/assets/google-icon.png'; // Import Google icon image
import facebookIcon from '@/assets/facebook-icon.png'; // Import Facebook icon image
import appleIcon from '@/assets/apple-icon.png'; // Import Apple icon image

export default {
  title: 'Molecules/SocialButtons', // Title of the component in Storybook
  component: SocialButtons,
};

const Template = (args) => ({
  components: { SocialButtons },
  setup() {
    return { args };
  },
  template: '<SocialButtons v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  googleIcon, // Pass the Google icon image as a prop
  facebookIcon, // Pass the Facebook icon image as a prop
  appleIcon, // Pass the Apple icon image as a prop
};
