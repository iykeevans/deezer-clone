<template>
  <div class="relative md:w-[50%] w-full h-12">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      class="absolute left-5 top-1/2 -translate-y-1/2"
    >
      <mask
        id="mask0_9_199"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect
          x="0.266647"
          y="0.266663"
          width="23.4667"
          height="23.4667"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_9_199)">
        <path
          d="M19.4311 20.8L13.2711 14.64C12.7822 15.0311 12.22 15.3407 11.5844 15.5689C10.9489 15.797 10.2726 15.9111 9.55553 15.9111C7.77923 15.9111 6.2759 15.2959 5.04553 14.0656C3.81516 12.8352 3.19997 11.3318 3.19997 9.55555C3.19997 7.77926 3.81516 6.27592 5.04553 5.04555C6.2759 3.81518 7.77923 3.2 9.55553 3.2C11.3318 3.2 12.8352 3.81518 14.0655 5.04555C15.2959 6.27592 15.9111 7.77926 15.9111 9.55555C15.9111 10.2726 15.797 10.9489 15.5689 11.5844C15.3407 12.22 15.0311 12.7822 14.64 13.2711L20.8 19.4311L19.4311 20.8ZM9.55553 13.9556C10.7778 13.9556 11.8166 13.5278 12.6722 12.6722C13.5278 11.8167 13.9555 10.7778 13.9555 9.55555C13.9555 8.33333 13.5278 7.29444 12.6722 6.43889C11.8166 5.58333 10.7778 5.15555 9.55553 5.15555C8.33331 5.15555 7.29442 5.58333 6.43886 6.43889C5.58331 7.29444 5.15553 8.33333 5.15553 9.55555C5.15553 10.7778 5.58331 11.8167 6.43886 12.6722C7.29442 13.5278 8.33331 13.9556 9.55553 13.9556Z"
          fill="#534F4F"
        />
      </g>
    </svg>

    <input
      type="text"
      placeholder="Search Artist"
      class="w-full border border-solid border-[#d9d9d9] bg-white rounded h-full px-4 pl-14 py-4"
      data-testid="search-input"
      v-model="searchInput"
    />

    <button
      type="button"
      style="background: hsla(30, 82%, 91%, 1)"
      class="py-1 px-2 font-semibold rounded absolute right-2 top-1/2 -translate-y-1/2"
      :class="{ 'text-gray-500': !searchInput }"
      @click="handleSearch(searchInput)"
      :disabled="!searchInput"
      data-testid="search-button"
    >
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ handleSearch: (value: string) => void }>();

const searchInput = ref("");
</script>
<style scoped></style>
