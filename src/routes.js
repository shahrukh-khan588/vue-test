import Vue from "vue";
import VueRouter from "vue-router";
import ForgetPassword from "./pages/ForgetPassword.vue";
import Login from "./pages/login.vue";
import Home from "./pages/Home.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forgetpassword", component: ForgetPassword },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const authToken = localStorage.getItem("Authorization");
//   if (to.path !== "/login" && !authToken) return router.push("/login");

//   next();
// });

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem("Authorization");
  if (to.fullPath === "/") {
    if (!authToken) {
      next("/login");
    }
  }
  if (to.fullPath === "/login") {
    if (authToken) {
      next("/");
    }
  }
  next();
});

export default router;
