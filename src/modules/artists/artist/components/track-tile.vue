<template>
  <div class="md:text-xl">{{ index + 1 }}. {{ trackTitle }}</div>

  <div class="flex items-center">
    <span class="mr-4 text-sm"
      >{{ convertFromSecondsToMinutes(trackTime) }} mins</span
    >

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#2032D9" />
      <path
        d="M23.619 15.619L11.619 22.5472V8.69082L23.619 15.619Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{ trackTitle: string; trackTime: number; index: number }>();

const convertFromSecondsToMinutes = (seconds: number) => {
  return (seconds / 60).toFixed(2);
};
</script>

<style scoped></style>
