<template>
  <div class="layout min-h-screen">
    <NavigationBar>
      <avatar />
      <search-input :handle-search="store.handleSearch" />
    </NavigationBar>

    <div class="py-20">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import SearchInput from "../components/search-input/index.vue";
import Avatar from "../components/avatar.vue";
import { useSearchStore } from "../modules/search/store";

const store = useSearchStore();
</script>

<style scoped>
.layout {
  background: hsla(30, 82%, 91%, 1);

  background: linear-gradient(
    90deg,
    hsla(30, 82%, 91%, 1) 0%,
    hsla(72, 33%, 97%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(30, 82%, 91%, 1) 0%,
    hsla(72, 33%, 97%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(30, 82%, 91%, 1) 0%,
    hsla(72, 33%, 97%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FBE9D7", endColorstr="#F9FAF5", GradientType=1 );
}
</style>
