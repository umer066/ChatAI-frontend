<template>
  <div class="conversation-rules-container" :class="{ 'dark-mode': isDarkMode }">
    <h1 class="neon-text">Conversation Rules</h1>
    <div class="rule-list">
      <!-- Example conversation rules -->
      <div class="rule-item" v-for="(rule, index) in rules" :key="index" :style="{ backgroundColor: isDarkMode ? '#252525' : '#f9f9f9', boxShadow: isDarkMode ? '0px 2px 5px rgba(255, 255, 255, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.1)' }">
        <h3 :style="{ color: isDarkMode ? '#4fc3f7' : '#007bff' }">Rule {{ index + 1 }}: {{ rule.title }}</h3>
        <p>{{ rule.description }}</p>
      </div>
    </div>
    <div class="dark-mode-toggle">
      <input type="checkbox" id="darkModeToggle" v-model="isDarkMode">
      <label for="darkModeToggle">Dark Mode</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      rules: [
        { title: 'Greeting', description: "If user message contains 'hello', respond with a greeting." },
        { title: 'Information Request', description: "If user message contains 'information', provide relevant information." },
        { title: 'Help', description: "If user message contains 'help', offer assistance." }
      ]
    };
  }
};
</script>

<style scoped>
/* Add component-specific styles */
.conversation-rules-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.neon-text {
  color: #fff; /* Neon text color */
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Neon text glow effect */
  margin-bottom: 20px;
}

.rule-list {
  margin-top: 20px;
}

.rule-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.rule-item h3 {
  margin-bottom: 8px;
}

.rule-item p {
  margin-bottom: 0;
}

.dark-mode-toggle {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.dark-mode-toggle label {
  margin-left: 10px;
  cursor: pointer;
}

.dark-mode-toggle input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 40px;
  height: 20px;
  background-color: #888; /* Gray background color for toggle button */
  border-radius: 20px; /* Rounded shape for toggle button */
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}

.dark-mode-toggle input[type="checkbox"]:checked {
  background-color: #007bff; /* Blue color when toggle is checked */
}

.dark-mode-toggle input[type="checkbox"]::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff; /* White color for toggle button handle */
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.3s ease-in-out;
}

.dark-mode-toggle input[type="checkbox"]:checked::before {
  transform: translateX(20px); /* Move toggle button handle to the right when checked */
}
</style>
