<template>
  <section class="h-[290px] bg-gray-200 px-10 flex flex-col justify-center">
    <div class="bg-gray-300 h-[180px] w-[180px] rounded-full">
      <img
        :src="picture"
        alt="artist-photo"
        class="w-full h-full rounded-full"
      />
    </div>

    <div class="mt-5">
      <h1 class="text-4xl serif-font mb-1">{{ artistName }}</h1>
      <div>{{ numberOfFans }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IProps {
  artistName: string;
  numberOfFans: number;
  picture: string;
  isLoading?: boolean;
}

defineProps<IProps>();
</script>

<style scoped></style>
