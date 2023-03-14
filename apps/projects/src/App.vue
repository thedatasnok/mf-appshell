<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <header class="h-12 flex-shrink-0 border-b bg-white shadow-sm">
      <div
        class="mx-auto flex h-full max-w-screen-lg items-center justify-between gap-4"
      >
        <h1 class="font-bold">projects</h1>

        <div
          class="group relative flex-1 rounded-md border outline-black transition-colors focus-within:border-black"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute top-1/2 left-1 h-6 w-6 -translate-y-1/2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <input
            type="text"
            class="h-full w-full border-0 bg-transparent pl-8 focus:outline-none focus:ring-transparent"
            placeholder="Search..."
          />
        </div>

        <figure
          class="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-cyan-600 shadow-sm"
        >
          <p class="font-semibold text-white">D</p>
        </figure>
      </div>
    </header>

    <main class="relative flex-1 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
