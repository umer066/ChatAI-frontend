<template>
  <div class="login-container">
    <h2 class="neon-text">Log in to your account</h2>
    <form @submit.prevent="login" class="login-form">
      <input type="text" v-model="username" placeholder="Username" class="login-input">
      <input type="password" v-model="password" placeholder="Password" class="login-input">
      <button type="submit" class="login-btn">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement login logic here
      console.log('Logging in...');
      // Redirect to dashboard after successful login
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #292b2c; /* Same as Dashboard background color */
}

.neon-text {
  font-size: 2rem;
  color: #fff; /* Neon text color */
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Neon text glow effect */
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-input,
.login-btn {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.login-input {
  background-color: #f9f9f9; /* Same as Dashboard background color */
}

.login-btn {
  background-color: #007bff; /* Neon blue color for buttons */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.login-btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
