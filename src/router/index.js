import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/AboutMe.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
