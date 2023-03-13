<template>
  <div
    class="mx-auto min-h-full max-w-screen-lg border-x bg-gray-50 px-4 pt-2 pb-4"
  >
    <h1 class="mb-2 text-lg font-semibold">Welcome back, thedatasnok</h1>

    <div class="flex flex-col gap-2">
      <div
        v-for="i in Array(10)"
        class="h-24 cursor-pointer rounded-md border border-black/5 bg-white shadow-sm transition-all hover:scale-x-[1.02]"
      ></div>
    </div>
  </div>
</template>
