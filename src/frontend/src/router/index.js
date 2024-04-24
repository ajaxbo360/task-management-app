import http from "@/helpers/http";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import TaskList from "@/views/Task/TaskList.vue";
import TaskDetail from "@/views/Task/TaskDetail.vue";
import TaskCreate from "@/views/Task/TaskCreate.vue";
import TaskEdit from "@/views/Task/TaskEdit.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",

      component: TaskList,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },

    {
      path: "/task/:id",
      name: "TaskDetail",
      component: TaskDetail,
      props: true,
    },
    {
      path: "/task/create",
      name: "TaskCreate",
      component: TaskCreate,
    },
    {
      path: "/task/:id/edit",
      name: "TaskEdit",
      component: TaskEdit,
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});
// Check if the user is authenticated.
router.beforeEach((to, from) => {
  if (to.name === "login") {
    return true;
  }
  if (to.name === "register") {
    return true;
  }

  if (!localStorage.getItem("token")) {
    return {
      name: "login",
    };
  }

  checkTokenAuthenticity();
});

const checkTokenAuthenticity = () => {
  http()
    .get("/api/user", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((response) => {})
    .catch((error) => {
      localStorage.removeItem("token");
      router.push({
        name: "login",
      });
    });
};
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
