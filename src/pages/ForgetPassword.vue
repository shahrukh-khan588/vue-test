<template>
  <div class="mx-auto my-auto">
    <v-card
      shaped
      elevation="0"
      tile="Login"
      class="mx-auto my-auto"
      max-width="323"
      v-if="!show"
    >
      <p class="my-4 text-center display-2">Forgot Password?</p>
      <v-container max-width="253px">
        <p class="text-center body-1 font-weight-thin text--disabled">
          Don’t worry we got your back we will send you the password link to
          your email
        </p>
      </v-container>

      <form @submit.prevent="forgetPassword">
        <v-text-field
          outlined
          label="Email Address"
          prependInnerIcon="mdi-email"
          :rules="emailRules"
          v-model="email"
          type="email"
        />

        <v-btn
          type="submit"
          style="background-color: #1a1a1a; color: white"
          large
          block
          color="#1a1a1a"
          >Reset Password
        </v-btn>
      </form>
    </v-card>
    <Dialog
      :show="show"
      :email="email"
      :handelCloseDialog="handelCloseDialog"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from "./sucsessDialog.vue";
import { auth } from "../firebaseConfig";
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
      show: false,
      password: "Password",
      emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    };
  },
  components: {
    Dialog,
  },
  methods: {
    forgetPassword() {
      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.show = true;
        })
        .catch((error) => {
          alert(error);
        });
    },
    handelCloseDialog() {
      this.show = false;
    },
  },
};
</script>
