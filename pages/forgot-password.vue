<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <!-- Page Title -->
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        
        <!-- Instructions -->
        <p class="text-gray-600 text-center mb-4">
          Enter your email address, and we'll send you a link to reset your password.
        </p>
  
        <!-- Forgot Password Form -->
        <form @submit.prevent="handleForgotPassword">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="Enter your email" 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>
  
          <!-- Error Message -->
          <p v-if="errorMessage" class="text-red-600 text-sm mb-4">{{ errorMessage }}</p>
  
          <!-- Success Message -->
          <p v-if="successMessage" class="text-green-600 text-sm mb-4">{{ successMessage }}</p>
  
          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>
  
        <!-- Back to Login -->
        <p class="text-center text-gray-600 mt-4">
          Remembered your password? 
          <NuxtLink to="/login" class="text-blue-600 hover:underline">Log in</NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";
  
  const email = ref("");
  const errorMessage = ref("");
  const successMessage = ref("");
  
  async function handleForgotPassword() {
    const auth = getAuth();
    errorMessage.value = "";
    successMessage.value = "";
  
    try {
      await sendPasswordResetEmail(auth, email.value);
      successMessage.value = "A password reset link has been sent to your email.";
      email.value = ""; // Clear input field
    } catch (error) {
      errorMessage.value = error.message || "An error occurred. Please try again.";
    }
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  