<template>
    <div class="conversation-rules-container">
      <h1>Conversation Rules</h1>
      <div class="rule-list">
        <!-- Example conversation rules -->
        <div class="rule-item">
          <h3>Rule 1: Greeting</h3>
          <p>If user message contains 'hello', respond with a greeting.</p>
        </div>
        <div class="rule-item">
          <h3>Rule 2: Information Request</h3>
          <p>If user message contains 'information', provide relevant information.</p>
        </div>
        <div class="rule-item">
          <h3>Rule 3: Help</h3>
          <p>If user message contains 'help', offer assistance.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add component logic here if needed
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles */
  .conversation-rules-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .rule-list {
    margin-top: 20px;
  }
  
  .rule-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .rule-item h3 {
    margin-bottom: 5px;
  }
  
  .rule-item p {
    margin-bottom: 10px;
  }
  </style>
  