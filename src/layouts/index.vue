<template>
  <div class="layout h-screen">
    <NavigationBar />

    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
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
