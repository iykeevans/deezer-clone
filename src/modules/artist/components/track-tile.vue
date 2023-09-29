<template>
  <div v-if="!isLoading">
    <div class="2xl:text-lg font-medium">{{ index + 1 }}. {{ trackTitle }}</div>

    <div class="flex items-center pl-5 text-sm font-light mt-1">
      {{ convertFromSecondsToMinutes(trackTime) }}
    </div>
  </div>

  <SkeletonLoader width="300px" height="12px" border-radius="5px" v-else />
</template>

<script setup lang="ts">
import SkeletonLoader from "../../../components/skeleton-loader.vue";

defineProps<{
  trackTitle: string;
  trackTime: number;
  index: number;
  isLoading: boolean;
}>();

const convertFromSecondsToMinutes = (seconds: number) => {
  return (seconds / 60).toFixed(2);
};
</script>

<style scoped></style>
