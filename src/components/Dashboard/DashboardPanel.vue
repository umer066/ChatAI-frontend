<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Dashboard Menu</h2>
      </div>
      <div class="sidebar-links">
        <router-link to="/chatbot">Chatbot Management</router-link>
        <router-link to="/conversation-rules">Conversation Rules</router-link>
        <router-link to="/pdf-integration">PDF Integration</router-link>
        <router-link to="/settings">Settings</router-link>
      </div>
    </div>

    <!-- Main content -->
    <div class="main-content">
      <h1>Welcome to the Dashboard</h1>
      <div class="user-info">
        <p>Logged in as: {{ currentUser.name }}</p>
        <button @click="logout">Logout</button>
      </div>
      <!-- Your main content here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {
        name: 'John Doe', // Example user data, replace with actual user data
      }
    };
  },
  methods: {
    logout() {
      // Implement logout logic here
      console.log('Logging out...');
      // Redirect to login page after logout
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sidebar {
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
}

.sidebar-header {
  margin-bottom: 20px;
}

.sidebar-links a {
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
}

.sidebar-links a:hover {
  background-color: #0056b3;
}

.main-content {
  flex: 3;
  padding: 20px;
}

.user-info button {
  background-color: #dc3545;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-info button:hover {
  background-color: #c82333;
}
</style>
