// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/Auth/LoginForm.vue';
import DashboardPanel from '../components/Dashboard/DashboardPanel.vue';
import ChatbotManagement from '../components/Chatbot/ChatbotManagement.vue';
import ConversationRules from '../components/Chatbot/ConversationRules.vue';
import PdfIntegration from '../components/Chatbot/PdfIntegration.vue';
import CustomizationOptions from '../components/Settings/CustomizationOptions.vue';

const routes = [
  {
    path: '/',
    redirect: '/login' // Redirect to login page by default
  },
  {
    path: '/login',
    component: LoginForm
  },
  {
    path: '/dashboard',
    component: DashboardPanel
  },
  {
    path: '/chatbot-management',
    component: ChatbotManagement
  },
  {
    path: '/conversation-rules',
    component: ConversationRules
  },
  {
    path: '/pdf-integration',
    component: PdfIntegration
  },
  {
    path: '/customization-options',
    component: CustomizationOptions
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
