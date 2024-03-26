<!-- Login.vue -->
<template>
  <div class="login-container">
    <h2>Log in to your account</h2>
    <form @submit.prevent="login" class="login-form">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Log in</button>
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
  background-color: #f9f9f9;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-form input,
.login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.login-form button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>
