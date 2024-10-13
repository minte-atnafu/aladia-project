import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
<<<<<<< HEAD

  e2e: {
    baseUrl: 'http://localhost:3000',  // Add this line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
=======
>>>>>>> df4ceea9e66c30dcc1d5ffe5c05f3ddb644ca0ce
});
