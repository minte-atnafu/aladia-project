<<<<<<< HEAD
import { defineNuxtConfig } from 'nuxt/config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

// Add the Font Awesome icons to the library
library.add(faGoogle, faFacebook, faApple);
=======
// https://nuxt.com/docs/api/configuration/nuxt-config
// Import the `defineNuxtConfig` function from Nuxt 3
import { defineNuxtConfig } from 'nuxt/config'; // Ensure you import defineNuxtConfig correctly
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03', // Compatibility date for your project
  devtools: { enabled: true }, // Enable devtools for development

<<<<<<< HEAD
  buildModules: ['@nuxtjs/fontawesome'], // Ensure Font Awesome module is included
  
  fontawesome: {
    icons: {
      solid: true,
      regular: true,
      brands: ['faGoogle', 'faFacebook', 'faApple'], // Specify which brand icons to include
    },
  },

=======
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
  vite: {
    assetsInclude: ['**/*.png'], // Include PNG files in asset handling
  },

<<<<<<< HEAD
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

=======
  // Storybook configuration
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
  storybook: {
    stories: ['~/components/**/*.stories.@(js|jsx|ts|tsx|vue)'], // Adjusted to include various file extensions
    addons: ['@storybook/addon-essentials'], // Essential addons for Storybook
    framework: {
      name: '@storybook/vue3-vite', // Using Vue 3 and Vite with Storybook
      options: {},
    },
  },
});

<<<<<<< HEAD

=======
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
