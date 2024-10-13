// RegisterPage.stories.js
import RegisterPage from '~/pages/register.vue'; // Adjust the path according to your project structure

export default {
  title: 'Pages/RegisterPage', // The title of your Storybook section
  component: RegisterPage,
  argTypes: {
    goToLogin: { action: 'goToLogin' },  // Action to simulate the 'Back to Login' click
  },
};

const Template = (args, { argTypes }) => ({
  components: { RegisterPage },
  setup() {
    return { args };
  },
  template: '<RegisterPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // Default props you want to pass to the component for this story, if any
};

export const WithCustomLogo = Template.bind({});
WithCustomLogo.args = {
  // You can override the props for specific stories
};
