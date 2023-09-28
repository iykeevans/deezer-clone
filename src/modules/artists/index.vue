<template>
  <div
    v-if="!isArtistView"
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 container mx-auto pt-16 px-8 md:px-0"
  >
    <div v-for="artist in artists" :key="artist.id" class="rounded">
      <artist-card :artist="artist" @click="onSelectArtist(artist)" />
    </div>
  </div>

  <div v-else>
    <artist />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getArtists } from "./artists.service";
import { IArtist } from "./artists.typings";
import ArtistCard from "./components/artist-card.vue";
import Artist from "./artist/index.vue";

const artists = ref<IArtist[]>([]);
const selectedArtist = ref<IArtist>();
const isArtistView = ref(false);

const onSelectArtist = (artist: IArtist) => {
  isArtistView.value = true;
  selectedArtist.value = artist;
};

onMounted(() => {
  getArtists().then((data) => (artists.value = data));
});
</script>

<style scoped></style>
