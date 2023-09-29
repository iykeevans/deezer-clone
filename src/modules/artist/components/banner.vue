<template>
  <section class="h-[290px] bg-gray-200 px-10 flex flex-col justify-center">
    <div class="bg-gray-300 h-[180px] w-[180px] rounded-full" v-if="!isLoading">
      <img
        :src="picture"
        alt="artist-photo"
        class="w-full h-full rounded-full"
      />
    </div>

    <skeleton-loader height="180px" width="180px" border-radius="100%" v-else />

    <div class="mt-5">
      <div>
        <h1 class="text-4xl serif-font mb-1" v-if="!isLoading">
          {{ artistName }}
        </h1>
        <skeleton-loader
          height="32px"
          width="180px"
          class="mb-1"
          border-radius="5px"
          v-else
        />
      </div>

      <div>
        <div v-if="!isLoading">{{ numberOfFans }}</div>
        <skeleton-loader
          height="16px"
          width="50px"
          class="mb-1"
          border-radius="5px"
          v-else
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import skeletonLoader from "../../../components/skeleton-loader.vue";

interface IProps {
  artistName: string;
  numberOfFans: number;
  picture: string;
  isLoading?: boolean;
}

defineProps<IProps>();
</script>

<style scoped></style>
