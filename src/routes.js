import ForgetPassword from "./pages/ForgetPassword.vue";
import Login from "./pages/login.vue";
import Home from "./pages/Home.vue";

export default [
  { path: "/login", component: Login },
  { path: "/forgetpassword", component: ForgetPassword },
  { path: "/", component: Home },
];
