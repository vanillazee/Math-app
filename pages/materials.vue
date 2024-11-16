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

    <!-- Main Content with Sidebar and Sub-Chapter Content -->
    <div class="container mx-auto flex mt-6">
      
      <!-- Left Sidebar: Chapter List -->
      <aside class="w-1/2 border-r border-gray-300 p-4">
        <h2 class="text-xl font-semibold mb-4">Chapters</h2>
        <ul>
          <li 
            v-for="(chapter, index) in chapters" 
            :key="index" 
            @click="selectChapter(index)"
            :class="{'bg-blue-100': selectedChapter === index}"
            class="p-4 mb-4 cursor-pointer border border-gray-300 rounded-lg hover:bg-blue-50 shadow-sm"
          >
            <h3 class="text-lg font-bold">{{ chapter.title }}</h3>
            <p class="text-gray-600 text-sm mt-1">{{ chapter.description }}</p>
          </li>
        </ul>
      </aside>

      <!-- Right Content: Sub-Chapter List -->
      <main class="w-2/3 p-4">
        <h2 class="text-xl font-semibold mb-4">Sub-Chapters</h2>
        <div v-if="selectedChapter !== null">
          <ul>
            <li 
              v-for="(subChapter, idx) in chapters[selectedChapter].subChapters" 
              :key="idx"
              class="p-2 border-b border-gray-200 hover:bg-gray-50"
            >
              {{ subChapter }}
            </li>
          </ul>
        </div>
        <div v-else class="text-gray-500">Select a chapter to view sub-chapters.</div>
      </main>

    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const chapters = ref([
  { title: 'Algebra', description: 'Basic concepts in Algebra', subChapters: ['Linear Equations', 'Quadratic Equations', 'Polynomials'] },
  { title: 'Geometry', description: 'Understanding shapes and angles', subChapters: ['Triangles', 'Circles', 'Polygons'] },
  { title: 'Calculus', description: 'Introduction to Calculus', subChapters: ['Limits', 'Derivatives', 'Integrals'] },
  { title: 'Statistics', description: 'Fundamentals of data analysis', subChapters: ['Mean', 'Median', 'Probability'] }
]);

const selectedChapter = ref(null);

function selectChapter(index) {
  selectedChapter.value = index;
}
</script>

<style scoped>
/* Additional styling for sidebar and content area */
aside {
  background-color: #f9fafb;
}

main {
  background-color: #ffffff;
}
</style>
