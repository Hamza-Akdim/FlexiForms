<template>
  <v-text-field
    :type="freeTextData.inputType"
    variant="outlined"
    :placeholder="freeTextData.placeholder"
  ></v-text-field>
</template>

<script>
export default {
  name: "input-field-free-text",

  inject: ["freeTextData"],
};
</script>

<style scoped></style>
