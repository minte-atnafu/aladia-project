// LoginForm.stories.js
import LoginForm from '@/components/LoginForm.vue'; // Adjust the path according to your project structure

export default {
  title: 'Components/LoginForm', // Title in Storybook navigation
  component: LoginForm,
  argTypes: {
    // Define props or actions for Storybook controls
    googleLogin: { action: 'googleLogin' },
    facebookLogin: { action: 'facebookLogin' },
    appleLogin: { action: 'appleLogin' },
    submitLogin: { action: 'submitLogin' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: '<LoginForm v-bind="args" />',
});

// Default login form story
export const Default = Template.bind({});
Default.args = {
  email: '',
};

// Story where email is pre-filled
export const WithPrefilledEmail = Template.bind({});
WithPrefilledEmail.args = {
  email: 'example@example.com',
};

// Story to simulate submitting the form
export const SubmitForm = Template.bind({});
SubmitForm.args = {
  email: 'submit@example.com',
  submitLogin: () => {
    alert('Login Submitted!');
  },
};

// Story where social logins are simulated
export const SocialLogins = Template.bind({});
SocialLogins.args = {
  email: '',
  googleLogin: () => alert('Google Login Triggered!'),
  facebookLogin: () => alert('Facebook Login Triggered!'),
  appleLogin: () => alert('Apple Login Triggered!'),
};
