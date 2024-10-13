/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import { mergeConfig } from 'vite';

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["jsdoc-type-pratt-parser"],
      },
    });
  },
};

export default config;
