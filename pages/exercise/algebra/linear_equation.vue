<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
          <NuxtLink to="/exercises" class="text-blue-600 hover:underline">
            &larr; Back to Exercises
          </NuxtLink>
        </nav>
      </header>
      <!-- Quiz Content -->
      <div class="container mx-auto mt-6">
        <h2 class="text-xl font-bold mb-4">Algebra - Linear Equations</h2>
        <form @submit.prevent="submitQuiz">
          <div v-for="(question, index) in questions" :key="index" class="mb-6">
            <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ question.question }}</h3>
            <div>
              <label
                v-for="(option, idx) in question.options"
                :key="idx"
                class="block mt-2"
              >
                <input
                  type="radio"
                  :name="`question-${index}`"
                  :value="idx"
                  v-model="answers[index]"
                />
                {{ option }}
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { collection, query, where, getDocs } from "firebase/firestore";
  import { db } from "@/firebaseInit";
  
  const questions = ref([]);
  const answers = ref([]);
  
  async function fetchQuestions() {
    const q = query(collection(db, "questions"), where("exerciseId", "==", "linear_equation"));
    const querySnapshot = await getDocs(q);
    questions.value = querySnapshot.docs.map((doc) => doc.data());
  }
  
  function submitQuiz() {
    let score = 0;
    questions.value.forEach((question, index) => {
      if (parseInt(answers.value[index]) === question.correctOption) {
        score++;
      }
    });
    alert(`You scored ${score}/${questions.value.length}`);
  }
  
  onMounted(() => {
    fetchQuestions();
  });
  </script>
  