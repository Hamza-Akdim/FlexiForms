<template>
  <v-text-field
    :type="survey[survey.length - 1].data.inputType"
    variant="outlined"
    :placeholder="survey[survey.length - 1].data.placeholder"
  ></v-text-field>
</template>

<script>
export default {
  name: "input-field-free-text",

  inject: ["survey"],
};
</script>

<style scoped></style>
