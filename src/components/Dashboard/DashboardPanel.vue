<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Dashboard Menu</h2>
      </div>
      <div class="sidebar-links">
        <button @click="loadScreen('Chatbot Management')">Chatbot Management</button>
        <button @click="loadScreen('Conversation Rules')">Conversation Rules</button>
        <button @click="loadScreen('PDF Integration')">PDF Integration</button>
        <!-- <button @click="loadScreen('Settings')">Settings</button> -->
      </div>
    </div>

    <!-- Main content -->
    <div class="main-content">
      <h1 class="neon-text">Welcome to the Dashboard</h1>
      <div class="user-info">
        <p class="neon-text">Logged in as: {{ currentUser.name }}</p>
        <button class="logout-btn" @click="logout">Logout</button>
      </div>
      <!-- Router view for dynamic content -->
      <router-view></router-view>
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
    },
    loadScreen(screen) {
      // Navigate to the selected screen
      this.$router.push(`/${screen.toLowerCase().replace(/\s/g, '-')}`);
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
  background: linear-gradient(to right, #4a90e2, #4682b4); /* Modern gradient background */
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
  border-radius: 10px;
}

.sidebar-header {
  margin-bottom: 20px;
}

.sidebar-links button {
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff; /* Neon blue color for buttons */
  color: #fff;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 15px rgba(0, 123, 255, 0.4); /* Neon blue glow effect */
  transition: box-shadow 0.3s ease-in-out;
}

.sidebar-links button:hover {
  box-shadow: 0px 0px 20px rgba(0, 123, 255, 0.7); /* Enhanced glow on hover */
}

.main-content {
  flex: 3;
  padding: 20px;
}

.neon-text {
  font-size: 2.5rem;
  color: #fff; /* Neon text color */
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Neon text glow effect */
}

.user-info {
  margin-top: 20px;
}

.user-info p {
  font-size: 1.2rem;
  color: #fff; /* Neon text color */
}

.logout-btn {
  background-color: #dc3545; /* Neon red color for logout button */
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.logout-btn:hover {
  background-color: #c82333; /* Darker red on hover */
}
</style>
