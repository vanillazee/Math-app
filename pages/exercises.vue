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
        <NuxtLink to="/login" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</NuxtLink>
      </nav>
    </header>
    <!-- Exercise List -->
    <div class="container mx-auto mt-6">
      <h2 class="text-xl font-semibold mb-4">Exercise Topics</h2>
      <ul>
        <li
          v-for="(exercise, index) in exercises"
          :key="index"
          class="p-4 mb-4 border border-gray-300 rounded-lg hover:bg-blue-50 shadow-sm"
        >
          <NuxtLink
            :to="`/exercise/${exercise.id}`"
            class="text-lg font-bold text-blue-600 hover:underline"
          >
            {{ exercise.title }}
          </NuxtLink>
          <p class="text-gray-600 text-sm mt-1">{{ exercise.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseInit"; // Ensure firebaseInit.js is configured

const exercises = ref([]);

async function fetchExercises() {
  const querySnapshot = await getDocs(collection(db, "exercises"));
  exercises.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

onMounted(() => {
  fetchExercises();
});
</script>
