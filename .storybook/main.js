/** @type { import('@storybook/vue3-vite').StorybookConfig } */
// import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

const config = {
  stories: [
    "../stories/**/*.mdx",  // Path to your MDX files
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)", // Include Vue story files
    "../componets/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)", // Include Vue story files
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
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
};

export default config;
