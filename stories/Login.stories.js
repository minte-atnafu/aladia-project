

import Login from '../components/LoginForm.vue';

export default {
  title: 'Components/Login', // Organizes the story under 'Components'
  component: Login,          // The component being documented
  argTypes: {
    email: { control: 'text', description: 'User email address' }, // Control for the email field
  },
};

// Template for the login component
const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

// Default login page story
export const Default = Template.bind({});

Default.args = {
  email: '', // Default value for the email field
};

// Story with a pre-filled email address
export const WithPrefilledEmail = Template.bind({});
WithPrefilledEmail.args = {
  email: 'example@domain.com',
};
