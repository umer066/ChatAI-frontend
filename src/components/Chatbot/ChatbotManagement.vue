<template>
    <div class="chat-management-container">
      <div class="chat-window">
        <!-- Chat messages area -->
        <div v-for="(message, index) in chatMessages" :key="index" :class="{'user-message': message.isUser}">
          <p v-if="message.isUser" class="user-text">{{ message.text }}</p>
          <div v-else class="other-message">
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>
      <div class="input-area">
          <div class="pdf-import-button">
            <!-- Import PDF button -->
            <button @click="openPDFUploader" class="pdf-button">
              <img src="path/to/your/pdf-icon.svg" alt="Import PDF" class="pdf-icon" />
            </button>
          </div>
        <!-- Text input for sending messages -->
        <textarea v-model="newMessage" placeholder="Type your message here"></textarea>
        <button @click="sendMessage" class="send-button">Send</button>
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
        newMessage: ''
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
      openPDFUploader() {
        // Implement logic to open PDF uploader or handle PDF import
        console.log('Opening PDF uploader...');
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-management-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f8f9fa; /* Light background color */
  }
  
  .chat-window {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background-color: #fff; /* White background for chat window */
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
    margin-bottom: 20px;
  }
  
  .user-message {
    text-align: right;
  }
  
  .user-text {
    background-color: #007bff; /* Blue color for user's messages */
    color: #fff; /* White text color */
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .other-message {
    background-color: #dcf8c6; /* Light green color for other's messages */
    color: #000; /* Black text color */
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .input-area {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff; /* White background for input area */
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  }
  
  textarea {
    flex: 1;
    resize: none;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  
  .send-button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff; /* Blue color for send button */
    color: #fff; /* White text color */
  }
  
  .send-button:hover {
    background-color: #0056b3; /* Darker blue color on hover */
  }
  
  .pdf-import-button {
    display: flex;
    justify-content: flex-end;
  }
  
  .pdf-button {
    padding: 8px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: #007bff; /* Blue color for PDF button */
  }
  
  .pdf-button:hover {
    background-color: #0056b3; /* Darker blue color on hover */
  }
  
  .pdf-icon {
    width: 24px;
    height: 24px;
  }
  </style>
  