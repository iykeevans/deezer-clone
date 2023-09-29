<template>
  <div>
    <div class="h-[130px] mb-5 rounded">
      <img
        :src="picture"
        class="h-full w-full rounded object-cover"
        v-if="!isLoading"
      />
      <skeleton-loader
        class="mt-1"
        height="130px"
        width="100%"
        border-radius="5px"
        v-else
      />
    </div>
    <h3 class="font-semibold" v-if="!isLoading">{{ title }}</h3>
    <skeleton-loader height="16px" width="100%" border-radius="5px" v-else />
    <p class="mt-1 text-sm font-light" v-if="!isLoading">{{ year }}</p>
    <skeleton-loader
      class="mt-1"
      height="8px"
      width="100%"
      border-radius="5px"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
import SkeletonLoader from "../../../components/skeleton-loader.vue";

interface IProps {
  title: string;
  year: string;
  picture: string;
  isLoading?: boolean;
}

defineProps<IProps>();
</script>

<style scoped></style>
