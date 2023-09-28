<template>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 container mx-auto pt-16 px-5 md:px-0"
  >
    <div v-for="artist in artists" :key="artist.id" class="rounded">
      <artist-card :artist="artist" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getArtists } from "./artists.service";
import { IArtist } from "./artists.typings";
import ArtistCard from "./components/artist-card.vue";

const artists = ref<IArtist[]>([]);

onMounted(() => {
  getArtists().then((data) => (artists.value = data));
});
</script>

<style scoped></style>
