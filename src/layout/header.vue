<template>
  <div>
    <v-app-bar flat class="white py-4 mx-auto bg-black" max-width="95%">
      <div class="d-flex">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-width="55px"
          src="../../src/assets/icons/Vector.svg"
        ></v-img>
        <v-toolbar-title>
          <p class="display-1 ml-2 mb-0">Logo</p>
        </v-toolbar-title>
      </div>
      <div class="d-flex align-center ml-auto" width="290" v-if="user">
        <v-avatar color="#9CF373" size="32" class="mr-3">
          <span class="white--text text-caption">Sh</span>
        </v-avatar>
        <p class="grey--text mb-0">{{ username }}</p>
        <v-btn icon color="black" @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { auth } from "../firebaseConfig";

export default {
  name: "App",
  components: {},
  data: () => ({
    user: "",
  }),
  methods: {
    logout() {
      auth
        .signOut(auth)
        .then(() => {
          localStorage.removeItem("Authorization");
          this.$router.push("/login");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },

  watch: {
    $route() {
      this.user = localStorage.getItem("Authorization");
    },
  },
  props: {
    username: String,
  },
};
</script>
