<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-dialog v-model="$props.show" max-width="486px">
    <v-card class="d-flex align-center flex-column pb-10 pt-8">
      <div class="crossIcons" v-if="showicon">
        <v-icon @click="nagivateToLogin = false">mdi-close</v-icon>
      </div>
      <v-img
        v-if="showicon"
        src="../../src/assets/fg.png"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-width="55px"
      />
      <v-card-title class="d-flex justify-space-between align-center">
        <span>{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <p class="text-center">
          {{ description }}
        </p>
      </v-card-text>
      <v-row align="center" justify="space-around" v-if="actions">
        <v-btn depressed text :ripple="false"> Decline </v-btn>

        <v-btn
          color="#1a1a1a"
          type="submit"
          @click="$props.allow"
          style="background-color: #1a1a1a; color: white"
        >
          Allow</v-btn
        >
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: Boolean,
    title: String,
    description: String,
    showicon: Boolean,
    actions: Boolean,
    allow: Function,
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
