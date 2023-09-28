<template>
  <div>
    <div class="h-[130px] bg-gray-300 mb-5 rounded">
      <img :src="picture" class="h-full w-full rounded object-cover" />
    </div>
    <h3 class="font-semibold">{{ title }}</h3>
    <p class="mt-1 text-sm font-light">{{ "2011" }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; year: string; picture: string }>();
</script>

<style scoped></style>
