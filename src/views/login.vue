<template>
  <v-content class="indigo">
    <h1 dark>Home</h1>
  </v-content>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  props: {
    children: {
      type: Function,
      required: true,
    },
  },
  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
