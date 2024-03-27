<template>
  <div class="customization-options">
    <div class="options-container">
      <!-- Language select -->
      <div class="language">
        <select v-model="selectedLanguage" class="language-select">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <!-- Avatar display -->
      <div class="avatar-container">
        <img class="avatar" :src="require('@/assets/logo.png')" alt="Avatar Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'en'
    };
  },
  computed: {
    isLoginPage() {
      // Check if the current route is the Login page
      return this.$route.path === '/';
    }
  },
  watch: {
    $route(to, from) {
      // Clear customization options when navigating away from the Login page
      if (from.path === '/' && to.path !== '/') {
        this.selectedLanguage = 'en';
      }
    }
  }
};
</script>

<style scoped>
.customization-options {
  background-color: #f0f0f0;
  padding: 10px; /* Reduced padding for the container */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.options-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language {
  flex-grow: 1;
  margin-right: 10px; /* Reduced margin for the language container */
}

.language-select {
  width: 80px; /* Reduced width for the select element */
  padding: 5px; /* Reduced padding for the select element */
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 12px; /* Reduced font size */
  appearance: none; /* Remove default appearance */
}

.language-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.avatar-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}
</style>
