<template>
  <div id="app">
    <!-- Include CustomizationOptions component -->
    <CustomizationOptions />

    <!-- Router view for rendering components based on routes -->
    <router-view />
  </div>
</template>

<script>
import CustomizationOptions from './components/Settings/CustomizationOptions.vue';

export default {
  components: {
    CustomizationOptions
  }
};
</script>

<style>
/* Global styles */

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-image: url('C:\Users\Rootp\OneDrive\Desktop\Random Forest\ChatAI\chat-ai-app\src\assets\background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.app-container {
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent overlay */
  padding: 20px;
  overflow: auto; /* Enable scrolling if content exceeds viewport height */
}
</style>
