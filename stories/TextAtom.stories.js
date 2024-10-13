// TextAtom.stories.js
import TextAtom from '../../components/atoms/TextAtom.vue'; // Adjust the path as necessary

export default {
  title: 'Atoms/Text', // Title of the component in Storybook
  component: TextAtom,
  argTypes: {
    text: { control: 'text', description: 'The text to display' },
  },
};

const Template = (args) => ({
  components: { TextAtom },
  setup() {
    return { args };
  },
  template: '<TextAtom v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  text: 'This is a sample text atom.',
};

// Empty text story
export const EmptyText = Template.bind({});
EmptyText.args = {
  text: '',
};

// Long text story
export const LongText = Template.bind({});
LongText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
