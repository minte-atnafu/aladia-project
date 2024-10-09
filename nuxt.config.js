// https://nuxt.com/docs/api/configuration/nuxt-config
// Import the `defineNuxtConfig` function from Nuxt 3
import { defineNuxtConfig } from 'nuxt/config'; // Ensure you import defineNuxtConfig correctly

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03', // Compatibility date for your project
  devtools: { enabled: true }, // Enable devtools for development

  vite: {
    assetsInclude: ['**/*.png'], // Include PNG files in asset handling
  },

  // Storybook configuration
  storybook: {
    stories: ['~/components/**/*.stories.@(js|jsx|ts|tsx|vue)'], // Adjusted to include various file extensions
    addons: ['@storybook/addon-essentials'], // Essential addons for Storybook
    framework: {
      name: '@storybook/vue3-vite', // Using Vue 3 and Vite with Storybook
      options: {},
    },
  },
});

