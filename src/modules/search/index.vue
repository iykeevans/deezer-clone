<template>
  <div>
    <div
      v-if="store.artists.length"
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 container mx-auto pt-16 px-8 md:px-0"
    >
      <div v-for="artist in store.artists" :key="artist.id" class="rounded">
        <artist-card
          :artist="artist"
          :data-testid="`artist-card-${artist.name.toLowerCase()}`"
          @click="router.push(`/artist/${artist.id}`)"
        />
      </div>
    </div>

    <div v-else class="flex w-full justify-center mt-40">
      <div v-if="!store.isSearching">Please Search For An Artist</div>
      <spinner v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import ArtistCard from "./components/artist-card.vue";
import Spinner from "../../components/spinner.vue";
import { useSearchStore } from "./store";

const store = useSearchStore();

const router = useRouter();
</script>

<style scoped></style>
