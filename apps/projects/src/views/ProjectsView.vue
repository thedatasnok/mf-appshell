<template>
  <div class="flex min-h-full w-screen flex-col px-4 pb-4 pt-2">
    <h1 class="mb-2 text-xl font-semibold">Projects</h1>
    <div class="grid flex-1 grid-cols-4 gap-4">
      <div v-for="_ in Array(8)" class="rounded-md bg-white shadow-sm"></div>
    </div>
  </div>
</template>
