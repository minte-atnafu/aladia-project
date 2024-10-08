/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",  // Path to your MDX files
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)", // Add 'vue' to include Vue story files
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  // Adding Vite plugin to handle .vue files
  async viteFinal(config, { configType }) {
    // You can modify the Vite config here if needed
    return config;
  },
};

export default config;
