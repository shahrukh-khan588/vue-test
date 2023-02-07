<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    :rounded="rounded"
    :block="block"
    :depressed="depressed"
    :loading="loading"
    :disabled="disabled"
    :onClick="onClick"
    style="background-color: #1a1a1a; color: white"
    large
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
  props: {
    color: {
      type: String,
    },
    outlined: Boolean,
    rounded: Boolean,
    block: Boolean,
    depressed: Boolean,
    loading: Boolean,
    disabled: Boolean,
    onClick: () => {},
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.custom-button {
  color: white;
  height: 48px !important;
}
</style>
