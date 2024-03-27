<template>
  <div class="chat-management-container" :class="{ 'dark-mode': isDarkMode }">
    <div class="chat-window">
      <!-- Chat messages area -->
      <div v-for="(message, index) in chatMessages" :key="index" :class="{'user-message': message.isUser}">
        <p v-if="message.isUser" class="user-text" :style="{ backgroundColor: getMessageColor(message.text) }">{{ message.text }}</p>
        <div v-else class="other-message" :style="{ backgroundColor: getMessageColor(message.text) }">
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>
    <div class="input-area">
      <!-- Text input for sending messages -->
      <textarea v-model="newMessage" placeholder="Type your message here" class="message-input"></textarea>
      <button @click="sendMessage" class="send-button">Send</button>
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
      chatMessages: [
        { text: 'Hello! How can I help you today?', isUser: false },
        { text: 'Hi! I need assistance with importing PDF files.', isUser: true }
      ],
      newMessage: '',
      isDarkMode: false
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.chatMessages.push({ text: this.newMessage, isUser: true });
        this.newMessage = '';
        // Implement logic to send the message to the chatbot backend
      }
    },
    getMessageColor(message) {
      // Function to determine message color based on its length
      if (message.length < 20) {
        return this.isDarkMode ? '#36454F' : '#dcf8c6'; // Dark green for short messages in dark mode
      } else if (message.length < 40) {
        return this.isDarkMode ? '#4A6371' : '#fff7c6'; // Dark yellow for medium-length messages in dark mode
      } else {
        return this.isDarkMode ? '#6B4242' : '#ffb6b6'; // Dark red for long messages in dark mode
      }
    }
  }
};
</script>

<style scoped>
.chat-management-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f0f2f5, #e3e6ea); /* Gradient background */
  padding: 20px;
  box-sizing: border-box; /* Include padding in height calculation */
}

.chat-window {
  flex: 1;
  overflow-y: auto;
  background-color: #fff; /* White background for chat window */
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
  margin-bottom: 20px;
  padding: 20px;
}

.user-message {
  text-align: right;
}

.user-text {
  border-radius: 15px;
  padding: 12px;
  margin-bottom: 10px;
  display: inline-block;
}

.other-message {
  border-radius: 15px;
  padding: 12px;
  margin-bottom: 10px;
  display: inline-block;
}

.input-area {
  display: flex;
  align-items: center;
  background-color: #fff; /* White background for input area */
  border-radius: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
  padding: 10px;
}

.message-input {
  flex: 1;
  resize: none;
  padding: 12px; /* Increased padding for better appearance */
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-right: 10px;
  transition: border-color 0.3s ease-in-out;
}

.message-input:focus {
  border-color: #007bff; /* Blue border color on focus */
  outline: none;
}

.send-button {
  padding: 12px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #007bff; /* Blue color for send button */
  color: #fff; /* White text color */
  transition: background-color 0.3s ease-in-out;
}

/* Continued styles for Chat Management component */
.send-button:hover {
  background-color: #0056b3; /* Darker blue color on hover */
}

.dark-mode-toggle {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.dark-mode-toggle label {
  margin-left: 10px;
  cursor: pointer;
}

/* Dark mode styles */
.dark-mode .chat-management-container {
  background-color: #252525; /* Dark background color */
}

.dark-mode .chat-window {
  background-color: #2d2d2d; /* Dark background color for chat window */
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.1); /* Soft shadow effect for dark mode */
  color: #fff; /* White text color */
}

.dark-mode .user-text {
  background-color: #007bff; /* Blue color for user's messages in dark mode */
}

.dark-mode .other-message {
  background-color: #17a2b8; /* Aqua color for other's messages in dark mode */
}

.dark-mode .input-area {
  background-color: #2d2d2d; /* Dark background color for input area in dark mode */
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.1); /* Soft shadow effect for dark mode */
}

.dark-mode .message-input {
  background-color: #3d3d3d; /* Dark background color for message input in dark mode */
  border-color: #555; /* Darker border color in dark mode */
  color: #fff; /* White text color in dark mode */
}

.dark-mode .send-button {
  background-color: #007bff; /* Blue color for send button in dark mode */
}

.dark-mode .send-button:hover {
  background-color: #0056b3; /* Darker blue color on hover in dark mode */
}

/* Dark mode toggle button styling */
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
  background-color: #007bff; /* Blue color when toggle is checked in dark mode */
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