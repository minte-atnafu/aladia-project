// InputAtom.stories.js
import InputAtom from '../../components/atoms/InputAtom.vue'; // Adjust the path as necessary

export default {
  title: 'Atoms/Input', // Title of the component in Storybook
  component: InputAtom,
  argTypes: {
    modelValue: { control: 'text', description: 'The input value' },
    iconSrc: { control: 'text', description: 'Icon source URL' },
    type: {
      control: { type: 'select', options: ['text', 'password', 'email'] }, 
      description: 'Type of the input field',
    },
    placeholder: { control: 'text', description: 'Input placeholder text' },
  },
};

const Template = (args) => ({
  components: { InputAtom },
  setup() {
    return { args };
  },
  template: '<InputAtom v-bind="args" />',
});

// Default input story
export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  type: 'text',
  placeholder: 'Enter text...',
};

// Story with icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  modelValue: '',
  iconSrc: 'https://example.com/icon.png', // You can replace this with your actual icon URL
  type: 'text',
  placeholder: 'Enter your email...',
};

// Password input story
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  modelValue: '',
  type: 'password',
  placeholder: 'Enter password...',
};
