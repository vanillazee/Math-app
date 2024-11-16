<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
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

    <!-- Main Content -->
    <div class="container mx-auto mt-6">
      <!-- Top Profiles -->
      <div class="flex justify-center space-x-8 mb-6">
        <div v-for="(user, index) in topUsers" :key="index" class="text-center">
          <img :src="user.image" alt="User Avatar" class="w-20 h-20 rounded-full mx-auto" />
          <p class="font-bold text-lg">{{ user.name }}</p>
        </div>
      </div>

      <!-- Leaderboard Table -->
      <div class="bg-white shadow rounded-lg p-4">
        <table class="w-full text-left">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-4">Rank</th>
              <th class="p-4">Name</th>
              <th class="p-4">Exercises</th>
              <th class="p-4">Points</th>
              <th class="p-4">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in leaderboard"
              :key="index"
              class="hover:bg-gray-50 border-b"
            >
              <td class="p-4">{{ index + 1 }}</td>
              <td class="p-4 flex items-center space-x-3">
                <img :src="user.image" alt="User Avatar" class="w-8 h-8 rounded-full" />
                <span>{{ user.name }}</span>
              </td>
              <td class="p-4">{{ user.exercises }}</td>
              <td class="p-4">{{ user.points }}</td>
              <td class="p-4">{{ user.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const topUsers = [
  { name: 'Ambappe', image: 'https://via.placeholder.com/64' },
  { name: 'Ambalingham', image: 'https://via.placeholder.com/64' },
  { name: 'Ambavinga', image: 'https://via.placeholder.com/64' },
];

const leaderboard = [
  { name: 'Ambalingham', image: 'https://via.placeholder.com/64', exercises: 49, points: 45000, location: 'Jakarta, Indonesia' },
  { name: 'Ambalingham', image: 'https://via.placeholder.com/64', exercises: 48, points: 44000, location: 'Jakarta, Indonesia' },
];
</script>
