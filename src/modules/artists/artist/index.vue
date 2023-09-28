<template>
  <div class="container mx-auto pt-10 px-8 md:px-0">
    <banner
      :artistName="tracks[0].artist.name"
      :numberOfFans="3000000"
      :picture="tracks[0].artist.picture_big"
      is-loading
    />

    <div class="flex flex-col lg:flex-row mt-20 gap-x-20">
      <section class="lg:w-8/12">
        <h2 class="text-2xl mb-6 font-bold">Albums</h2>

        <div class="grid md:grid-cols-4 gap-x-10 gap-y-10">
          <div v-for="(track, i) in tracks" :key="i">
            <album-card
              :title="track.album.title"
              year="2011"
              :picture="track.album.cover_big"
            />
          </div>
        </div>
      </section>

      <aside class="lg:w-4/12 mt-16 lg:mt-0">
        <h2 class="text-2xl mb-6 font-bold">Top Tracks</h2>

        <div>
          <div
            v-for="(track, i) in tracks"
            :key="i"
            class="flex items-center justify-between mb-5"
          >
            <track-tile
              :trackTitle="track.title"
              :trackTime="track.duration"
              :index="i"
            />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import Banner from "./components/banner.vue";
import AlbumCard from "./components/album-card.vue";
import TrackTile from "./components/track-tile.vue";

import { artistSearch } from "../artists.service";
import { ITrack } from "../artists.typings";

const tracks = ref<ITrack[]>([]);

onMounted(async () => {
  try {
    const response = await artistSearch();
    console.log(response.data);
    tracks.value = response.data.slice(0, 5);
  } catch (error: any) {
    throw new Error(error);
  }
});
</script>

<style scoped></style>
