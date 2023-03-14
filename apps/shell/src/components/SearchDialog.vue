<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from '@headlessui/vue';
import { useRouter } from 'vue-router';
import { useDebounce } from '@vueuse/core';
import { computed, ref } from 'vue';

const emits = defineEmits(['close']);

const router = useRouter();
const routes = router
  .getRoutes()
  .filter((route) => route.meta.navigable)
  .map((route) => route.meta);

const searchValue = ref('');
const debouncedSearchValue = useDebounce(searchValue, 200);
const filteredRoutes = computed(() => {
  const search = debouncedSearchValue.value.toLowerCase();

  if (search.length === 0) {
    return routes;
  }

  return routes.filter((route) => route.name.toLowerCase().includes(search));
});

const navigateTo = (route: (typeof filteredRoutes.value)[number]) => {
  router.push(route.href);
  emits('close');
};

const handleFrequentKeypress = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement;

  const KEY_MAP: { [k: string]: () => void } = {
    ArrowRight: () => {
      (target.nextSibling as HTMLElement)?.focus?.();
    },
    ArrowLeft: () => {
      (target.previousSibling as HTMLElement)?.focus?.();
    },
    Enter: () => {
      target.click?.();
    },
  };

  if (e.key in KEY_MAP) {
    KEY_MAP[e.key]();
  }
};

const handleKeypress = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement;

  const KEY_MAP: { [k: string]: () => void } = {
    ArrowDown: () => {
      (target.nextSibling as HTMLElement)?.focus?.();
    },
    ArrowUp: () => {
      (target.previousSibling as HTMLElement)?.focus?.();
    },
    Enter: () => {
      target.click?.();
    },
  };

  if (e.key in KEY_MAP) {
    KEY_MAP[e.key]();
  }
};
</script>

<template>
  <Dialog as="div" @close="emits('close')" class="relative z-10">
    <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="fixed inset-0 bg-black bg-opacity-20"></div>
    </TransitionChild>

    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left transition-all"
          >
            <DialogTitle as="h3" class="mb-1 text-sm font-medium text-gray-700">
              Quick Navigation
            </DialogTitle>

            <div
              class="group relative flex-1 rounded-md border outline-black transition-colors focus-within:border-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="pointer-events-none absolute top-1/2 left-1 h-6 w-6 -translate-y-1/2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                type="text"
                class="h-full w-full border-0 bg-transparent pl-8 focus:outline-none focus:ring-transparent"
                placeholder="Search for a page"
                v-model="searchValue"
              />
            </div>

            <h4 class="mt-1 text-xs font-medium text-gray-700">
              Frequently visited pages
            </h4>

            <div class="flex gap-1">
              <a
                v-for="route in filteredRoutes"
                tabindex="0"
                @keydown="handleFrequentKeypress"
                @click="navigateTo(route)"
                class="flex cursor-pointer gap-1 rounded-md border bg-gray-100 px-0.5 py-1 text-gray-800 outline-none focus:border-cyan-600 focus:text-cyan-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <p class="text-xs">{{ route.name }}</p>
              </a>
            </div>

            <p class="mt-2 text-xs font-medium text-gray-700">
              Showing {{ filteredRoutes.length }} results
            </p>

            <div class="mt-1 flex flex-col divide-y divide-gray-300">
              <a
                v-for="route in filteredRoutes"
                tabindex="0"
                class="group cursor-pointer outline-none"
                @keydown="handleKeypress"
                @click="navigateTo(route)"
              >
                <div
                  class="my-0.5 flex items-center gap-1 rounded-md p-2 ring-gray-200 focus:ring-2 group-focus:bg-cyan-600 group-focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <p class="font-medium">{{ route.name }}</p>
                </div>
              </a>
            </div>

            <button
              class="absolute top-3 right-3 rounded-md border p-0.5 font-semibold transition-all hover:bg-gray-100"
              @click="emits('close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</template>
