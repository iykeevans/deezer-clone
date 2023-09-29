<template>
  <div
    class="bg-gray-300"
    :style="`width: ${width}; height: ${height}; border-radius: ${borderRadius}`"
  ></div>
</template>

<script setup lang="ts">
interface IProps {
  height: string;
  width: string;
  shape?: string;
  borderRadius?: string;
}
defineProps<IProps>();
</script>

<style scoped></style>
