<template>
    <div class="flex min-h-screen">
      <!-- Kiri: Background Image -->
      <img src="~/assets/bg2.png" alt="Math Background" class="w-3/5 h-full bg-cover" />
  
      <!-- Kanan: Register Form -->
      <div class="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
        <!-- Logo dan About -->
        <div class="absolute top-8 right-20 flex items-center space-x-4">
            <NuxtLink to="/dashboard" class="text-gray-600 hover:text-blue-600">Home</NuxtLink>
            <img src="assets/logo.png" alt="App Logo" class="w-8 h-8" />
        </div>
  
        <!-- Form Register -->
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form class="w-3/4">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <!-- Button Register -->
          <button type="submit" class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
          
          <!-- Login and Google Signup -->
          <div class="text-center mt-4">
            <p class="text-gray-600">Already have an account? 
              <NuxtLink to="/login" class="text-blue-600 hover:underline">Login</NuxtLink>
            </p>
            <p class="mt-2 text-gray-600">or</p>
            <button class="flex items-center justify-center w-full mt-4 py-2 border border-gray-300 rounded-md">
              <img src="assets/google-logo.png" alt="Google Logo" class="w-5 h-5 mr-2" />
              <span>Sign up with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Tambahkan style tambahan jika diperlukan */
  </style>
  