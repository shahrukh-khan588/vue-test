<template>
  <v-app>
    <app-header :username="username" :logout="logout" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import header from "./layout/header.vue";
export default {
  name: "App",

  components: {
    "app-header": header,
  },

  data: () => ({
    username: "shahrukh khan",
  }),
  methods: {
    logout() {
      console.log(this.username, "username");
      this.username = "";
    },
  },
};
</script>

<style scoped>
.test {
  font-family: "Balsamiq Sans", cursive;
}
</style>
