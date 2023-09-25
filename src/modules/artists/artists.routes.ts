import Artists from "./index.vue";
import Artist from "./artist/index.vue";

const artistsRoutes = [
  { path: "/artists", component: Artists },
  { path: "/artists/:id", component: Artist },
];

export default artistsRoutes;
