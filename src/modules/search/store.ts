// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { $_searchByArtist } from "./service";
import { IArtist, ITrack } from "./typings";

export const useSearchStore = defineStore("search", () => {
  const artists = ref<IArtist[]>([]);
  const isSearching = ref(false);
  const isSearchView = ref(true);

  async function handleSearch(query: string) {
    try {
      isSearching.value = true;
      isSearchView.value = true;
      const response = await $_searchByArtist(query);
      artists.value = response.data;
    } catch (error: any) {
      throw new Error(error);
    } finally {
      isSearching.value = false;
    }
  }

  return { artists, handleSearch, isSearching, isSearchView };
});
