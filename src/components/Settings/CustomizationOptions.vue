<template>
    <div class="customization-options">
      <div v-if="!isLoginPage" class="options-container">
        <div class="avatar">
          <!-- Avatar input -->
          <input type="text" v-model="avatarUrl" placeholder="Avatar URL">
        </div>
        <div class="language">
          <!-- Language select -->
          <select v-model="selectedLanguage">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        avatarUrl: '',
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
          this.avatarUrl = '';
          this.selectedLanguage = 'en';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .customization-options {
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  .options-container {
    display: flex;
    align-items: center;
  }
  
  .avatar,
  .language {
    margin-right: 10px;
  }
  
  .avatar input {
    width: 150px;
  }
  
  .language select {
    width: 100px;
  }
  </style>
  