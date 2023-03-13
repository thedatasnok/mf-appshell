<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <header class="h-12 flex-shrink-0 border-b bg-white shadow-sm">
      <div
        class="mx-auto flex h-full max-w-screen-lg items-center justify-between gap-4"
      >
        <h1 class="font-bold">mf-appshell</h1>

        <div
          class="group flex-1 rounded-md border outline-black transition-colors focus-within:border-black"
        >
          <input
            type="text"
            class="h-full w-full border-0 bg-transparent focus:outline-none focus:ring-transparent"
          />
        </div>

        <figure class="h-8 w-8 rounded-full bg-gray-300"></figure>
      </div>
    </header>

    <main class="relative flex-1 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
