<template>
  <v-dialog v-model="$props.show" max-width="500px">
    <v-card class="d-flex align-center flex-column pb-4 pt-12">
      <div class="crossIcons">
        <v-icon @click="nagivateToLogin">mdi-close</v-icon>
      </div>
      <v-img
        src="../../src/assets/fg.png"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-width="55px"
      />
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Password Reset Link sent</span>
      </v-card-title>
      <v-card-text>
        <p class="text-center">
          Passsword reset link sent succefuly to the email “{{ email }}” please
          check your inbox for further instructions to set your new password
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {},
  props: {
    show: Boolean,
    email: String,
    handelCloseDialog: Function,
  },
  methods: {
    nagivateToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.crossIcons {
  position: absolute;
  right: 5px;
  top: 6px;
}
</style>
