import { defineNuxtConfig } from 'nuxt/config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

// Add the Font Awesome icons to the library
library.add(faGoogle, faFacebook, faApple);

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03', // Compatibility date for your project
  devtools: { enabled: true }, // Enable devtools for development

  buildModules: ['@nuxtjs/fontawesome'], // Ensure Font Awesome module is included
  
  fontawesome: {
    icons: {
      solid: true,
      regular: true,
      brands: ['faGoogle', 'faFacebook', 'faApple'], // Specify which brand icons to include
    },
  },

  vite: {
    assetsInclude: ['**/*.png'], // Include PNG files in asset handling
  },

  css: [
    '~/assets/css/tailwind.css',  // Include Tailwind CSS
    // '~/assets/css/custom.css',
    // Include custom CSS file if you have one
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},   // Tailwind CSS integration
        autoprefixer: {},  // Autoprefixer for vendor prefixes
      },
    },
  },

  storybook: {
    stories: ['~/components/**/*.stories.@(js|jsx|ts|tsx|vue)'], // Adjusted to include various file extensions
    addons: ['@storybook/addon-essentials'], // Essential addons for Storybook
    framework: {
      name: '@storybook/vue3-vite', // Using Vue 3 and Vite with Storybook
      options: {},
    },
  },
});


