import { createRouter, createWebHistory } from "vue-router";
import searchRoutes from "./modules/search/routes";
import artistRoutes from "./modules/artist/routes";

export const routes = [
  {
    path: "/",
    component: () => import("./layouts/index.vue"),
    redirect: "/search",
    children: [...searchRoutes],
  },
  {
    path: "/",
    component: () => import("./layouts/secondary.vue"),
    children: [...artistRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
