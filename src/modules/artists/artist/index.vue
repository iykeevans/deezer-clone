<template>
  <div class="container mx-auto pt-10 px-8 md:px-0">
    <section class="h-[290px] bg-gray-200 px-10 flex flex-col justify-center">
      <div class="bg-gray-300 h-[180px] w-[180px] rounded-full"></div>

      <div class="mt-5">
        <h1 class="text-4xl serif-font mb-1">Jacob Collier</h1>
        <div>382k Fans</div>
      </div>
    </section>

    <div class="flex flex-col lg:flex-row mt-20 gap-x-20">
      <section class="lg:w-8/12">
        <h2 class="text-2xl mb-6 font-bold">Albums</h2>

        <div class="grid md:grid-cols-4 gap-x-10">
          <div v-for="(album, i) in albums" :key="i">
            <div class="h-[130px] bg-gray-300 mb-5 rounded"></div>
            <!-- <img :src="album.image" alt="album_image" /> -->
            <h3 class="font-semibold">{{ album.name }}</h3>
            <p class="mt-1 text-sm font-light">{{ album.year }}</p>
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
            <div class="text-xl">{{ i + 1 }}. {{ track }}</div>

            <div class="flex items-center">
              <span class="mr-4 text-sm">02:54</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#2032D9" />
                <path
                  d="M23.619 15.619L11.619 22.5472V8.69082L23.619 15.619Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
const albums = [
  {
    name: "Djesse Vol. 3",
    year: "2019",
    image:
      "https://www.figma.com/file/b42M6yaFZlrqXz4RiPX3q0/Hi-fi-(Copy)?type=design&node-id=9-263&mode=dev",
  },
  {
    name: "In my room",
    year: "2020",
    image:
      "https://www.figma.com/file/b42M6yaFZlrqXz4RiPX3q0/Hi-fi-(Copy)?type=design&node-id=9-268&mode=dev",
  },
  {
    name: "Djesse Vol. 2",
    year: "2018",
    image:
      "https://www.figma.com/file/b42M6yaFZlrqXz4RiPX3q0/Hi-fi-(Copy)?type=design&node-id=9-273&mode=dev",
  },
  {
    name: "Djesse Vol. 1",
    year: "2010",
    image:
      "https://www.figma.com/file/b42M6yaFZlrqXz4RiPX3q0/Hi-fi-(Copy)?type=design&node-id=26-919&mode=dev",
  },
];

const tracks = [
  "In my room",
  "You and i",
  "Don't you know",
  "Flinestones",
  "Here comes the sun",
];
</script>

<style scoped></style>
