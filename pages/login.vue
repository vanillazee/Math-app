<template>
  <div class="flex min-h-screen">
    <!-- Kiri: Background Image -->
    <div class="w-1/2 h-full bg-cover bg-center" style="background-image: url('/math-background.jpg');"></div>
    
    <!-- Kanan: Login Form -->
    <div class="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
      <!-- Logo dan About -->
      <div class="absolute top-8 right-20 flex items-center space-x-4">
        <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600">About</NuxtLink>
        <img src="assets/logo.png" alt="App Logo" class="w-8 h-8" />
      </div>

      <!-- Form Login -->
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Login</h2>
      <form class="w-3/4">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email or Username</label>
          <input type="text" id="email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between mb-4">
          <label class="flex items-center text-gray-700">
            <input type="checkbox" class="mr-2" />
            Remember Me
          </label>
          <NuxtLink to="/forgot-password" class="text-blue-600 hover:underline">Forgot Password?</NuxtLink>
        </div>

        <!-- Button Login -->
        <button type="submit" class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Login
        </button>
        
        <!-- Register and Google Login -->
        <div class="text-center mt-4">
          <p class="text-gray-600">Don't have an account? 
            <NuxtLink to="/register" class="text-blue-600 hover:underline">Sign Up</NuxtLink>
          </p>
          <p class="mt-2 text-gray-600">or</p>
          <button class="flex items-center justify-center w-full mt-4 py-2 border border-gray-300 rounded-md">
            <img src="assets/google-logo.png" alt="Google Logo" class="w-5 h-5 mr-2" />
            <span>Login with Google</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>
