/** @type { import('@storybook/vue3-vite').StorybookConfig } */
<<<<<<< HEAD
import { mergeConfig } from 'vite';

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  
=======
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

const config = {
  stories: [
    "../stories/**/*.mdx",  // Path to your MDX files
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)", // Include Vue story files
  ],

>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
<<<<<<< HEAD
    "@storybook/addon-mdx-gfm",
  ],
  
=======
    "@storybook/addon-mdx-gfm"
  ],

>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
<<<<<<< HEAD
  
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["jsdoc-type-pratt-parser"],
      },
    });
  },
=======

  // Adding Vite plugin to handle .vue files
  // async viteFinal(viteConfig, { configType }) {
  //   // Include the Vue plugin in the Vite configuration
  //   viteConfig.plugins = [
  //     ...(viteConfig.plugins || []),
  //     vue(),
  //   ];
    
  //   // You can modify the Vite config here if needed
  //   return viteConfig;
  // },

  // docs: {}
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
};

export default config;
