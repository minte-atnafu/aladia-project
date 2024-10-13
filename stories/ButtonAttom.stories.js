// ButtonAtom.stories.js
import ButtonAtom from '@/components/atom/ButtonAtom.vue'; // Adjust the path based on your project structure

export default {
  title: 'Atoms/Button', // The title in the Storybook navigation
  component: ButtonAtom,
  argTypes: {
    clickAction: { action: 'clicked' }, // Define the action to log button clicks
    label: { control: 'text' }, // Add a control for changing the button text
  },
};

const Template = (args) => ({
  components: { ButtonAtom },
  setup() {
    return { args };
  },
  template: '<ButtonAtom v-bind="args">{{ args.label }}</ButtonAtom>',
});

// Default button story
export const Default = Template.bind({});
Default.args = {
  label: 'Enter', // Default button label
  clickAction: () => alert('Button Clicked!'), // Default click action
};

// Story with custom label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Click Me',
  clickAction: () => alert('Custom Label Button Clicked!'),
};

// Story where you can simulate a disabled button (optional)
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'Disabled',
  clickAction: () => {}, // No action on click
};
