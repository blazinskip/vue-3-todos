import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodosPage from "@/views/TodosPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TodosPage",
    component: TodosPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
