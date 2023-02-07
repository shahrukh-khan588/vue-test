<template>
  <v-text-field
    :label="label"
    :hint="hint"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :prepend-inner-icon="prependInnerIcon"
    :outlined="outlined"
    :solo="solo"
    :flat="flat"
    :background-color="backgroundColor"
    :type="type"
    :rules="rules"
  />
</template>
<v-text-field outlined append-outer-icon="mdi-map-marker"></v-text-field>
<script>
export default {
  props: {
    label: String,
    hint: String,
    prependIcon: String,
    appendIcon: String,
    prependInnerIcon: String,
    outlined: Boolean,
    solo: Boolean,
    flat: Boolean,
    rules: String,
    type: String,
    backgroundColor: {
      type: String,
      default: "white",
    },
    prependInner: {
      type: String,
      default: "",
    },
  },
};
</script>
