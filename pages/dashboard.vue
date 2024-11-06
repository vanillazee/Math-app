<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Top Navigation Bar -->
    <header class="bg-white shadow">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="assets/logo.png" alt="Logo" class="w-10 h-10" />
          <span class="text-2xl font-bold text-gray-800">M-Mate</span>
        </div>

        <!-- Center Menu Links -->
        <ul class="flex space-x-8 text-lg text-gray-700">
          <li><NuxtLink to="/dashboard" class="hover:text-blue-600">Dashboard</NuxtLink></li>
          <li><NuxtLink to="/materials" class="hover:text-blue-600">Material</NuxtLink></li>
          <li><NuxtLink to="/exercises" class="hover:text-blue-600">Exercise</NuxtLink></li>
          <li><NuxtLink to="/leaderboard" class="hover:text-blue-600">Leaderboard</NuxtLink></li>
        </ul>

        <!-- Login Button -->
        <NuxtLink to="/login" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Login
        </NuxtLink>
      </nav>
    </header>

    <!-- Background Image Section -->
    <section class="relative">
      <div class="h-96 bg-cover bg-center" style="background-image: url('/math-background.jpg');">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black opacity-40"></div>
        
        <!-- Centered Title & Subtitle -->
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-4xl font-bold">Welcome to M-Mate</h1>
            <p class="mt-4 text-lg">An engaging platform to learn and practice mathematics for everyone.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Description Section -->
    <section class="container mx-auto px-6 py-12 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">About M-Mate</h2>
      <p class="text-lg text-gray-600 leading-relaxed">
        M-Mate is designed to make learning mathematics fun and interactive. 
        Explore different topics, take quizzes, and track your progress on the leaderboard. 
        Join us in building a strong foundation in math!
      </p>
    </section>
    
  </div>
</template>

<script setup>
// No additional scripts are needed for this basic layout
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
