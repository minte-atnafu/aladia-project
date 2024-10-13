// WelcomeSection.stories.js
import WelcomeSection from '@/components/molecules/WelcomeSectionMolecule.vue'; // Adjust the path as necessary

export default {
  title: 'Molecules/WelcomeSection', // Title of the component in Storybook
  component: WelcomeSection,
};

const Template = (args) => ({
  components: { WelcomeSection },
  setup() {
    return { args };
  },
  template: '<WelcomeSection v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {};
