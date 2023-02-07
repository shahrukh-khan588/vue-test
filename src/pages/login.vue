<template>
  <v-card shaped elevation="0" class="mx-auto my-auto" max-width="400">
    <p class="my-4 text-center display-2">Login</p>
    <form @submit.prevent="userRegistration">
      <v-text-field
        width="500px"
        outlined
        label="Email Address"
        prependInnerIcon="mdi-email"
        v-model="user.email"
        aria-autocomplete="none"
        :rules="emailRules"
      />
      <v-text-field
        width="500px"
        outlined
        label="Password"
        prependInnerIcon="mdi-lock"
        :type="showPassowrd ? 'text' : 'password'"
        :append-icon="showPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassowrd = !showPassowrd"
        v-model="user.password"
        aria-autocomplete="none"
      />
      <v-btn
        block
        color="#1a1a1a"
        type="submit"
        style="background-color: #1a1a1a; color: white"
        large
      >
        Login</v-btn
      >
    </form>
    <v-container class="text-center">
      <router-link to="/forgetpassword" style="color: #1a1a1a">
        Forgot Password ?</router-link
      >
    </v-container>
  </v-card>
</template>

<script>
import { auth } from "../firebaseConfig";
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      showPassowrd: false,
      password: "Password",
      emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    };
  },
  components: {},
  methods: {
    userRegistration() {
      auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              localStorage.setItem("Authorization", res.user);
              this.$router.push("/");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>

<style></style>
