<template>
  <div class="container mx-auto pt-10 px-8 md:px-0">
    <banner
      :artistName="artist?.name"
      :numberOfFans="artist.nb_fan ?? 0"
      :picture="artist?.picture_big ?? ''"
      :is-loading="isLoading"
    />

    <div class="flex flex-col lg:flex-row mt-20 gap-x-20">
      <section class="lg:w-8/12">
        <h2 class="text-2xl mb-6 font-bold">Albums</h2>

        <div class="grid md:grid-cols-4 gap-x-10 gap-y-10">
          <div v-for="(album, i) in albums" :key="i">
            <album-card
              :title="album.title"
              :year="album.release_date ?? ''"
              :picture="album.cover_big"
              :isLoading="isLoadingAlbums"
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
              :trackTime="Number(track.duration)"
              :index="i"
              :is-loading="isLoadingTopTracks"
            />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import Banner from "./components/banner.vue";
import AlbumCard from "./components/album-card.vue";
import TrackTile from "./components/track-tile.vue";

import {
  $_getArtistAlbums,
  $_getArtistData,
  $_getArtistTopTracks,
} from "./service";
import {
  artist as artistMock,
  albums as albumsMock,
  tracks as tracksMock,
} from "./artist.mock";
import { ITrack, IArtist, IAlbum } from "./typings";

const tracks = ref<ITrack[]>(tracksMock);
const artist = ref<IArtist>(artistMock);
const albums = ref<IAlbum[]>(albumsMock);
const isLoading = ref(true);
const isLoadingAlbums = ref(true);
const isLoadingTopTracks = ref(true);
const route = useRoute();

const fetchArtistData = async () => {
  try {
    const response = await $_getArtistData(route.params.artist as string);
    artist.value = response;
  } catch (error: any) {
    alert("Unable to fetch artist data");
  } finally {
    isLoading.value = false;
  }
};

const fetchArtistAlbums = async () => {
  try {
    const response = await $_getArtistAlbums(route.params.artist as string);
    albums.value = response.data;
  } catch (error: any) {
    alert("Unable to fetch artist data");
  } finally {
    isLoadingAlbums.value = false;
  }
};

const fetchArtistTopTracks = async () => {
  try {
    const response = await $_getArtistTopTracks(route.params.artist as string);
    tracks.value = response.data;
  } catch (error: any) {
    alert("Unable to fetch artist data");
  } finally {
    isLoadingTopTracks.value = false;
  }
};

onMounted(() => {
  fetchArtistData();
  fetchArtistAlbums();
  fetchArtistTopTracks();
});
</script>

<style scoped></style>
