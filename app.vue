<script setup>
import { useAuth } from "@/composables/useAuth";

// Call the composable to monitor user state
useAuth();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
