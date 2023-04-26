import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Counter from "../components/Counter.vue";
import UserChange from "../components/UserChange.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "counter",
          component: Counter,
        },
        {
          path: "user-change",
          component: UserChange,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
