<template>
  <v-text-field
    :type="freeText.data.inputType"
    variant="outlined"
    :placeholder="freeText.data.placeholder"
  ></v-text-field>
</template>

<script>
export default {
  name: "input-field-free-text",

  inject: ["freeText"],
};
</script>

<style scoped></style>
