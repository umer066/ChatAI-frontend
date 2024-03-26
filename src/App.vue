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
/* Add global styles as needed */
</style>
