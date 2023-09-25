import { createRouter, createWebHistory } from "vue-router";
import artistsRoutes from "./modules/artists/artists.routes";

const routes = [{ path: "/", redirect: "/artists" }, ...artistsRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
