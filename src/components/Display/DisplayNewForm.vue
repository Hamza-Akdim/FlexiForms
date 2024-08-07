<template>
  <FreeText v-if="survey[survey.length - 1].type === 'freeText'" />
  <SingleSelect v-if="survey[survey.length - 1].type === 'singleSelect'" />
    {{ console.log(survey[survey.length - 1].type) }}
</template>

<script>
import FreeText from "./FreeText.vue";
import SingleSelect from "./SingleSelect.vue";

export default {
  name: "display-new-form",
  components: {
    FreeText,
    SingleSelect,
  },
  inject: ["survey"],
};
</script>

<style scoped></style>
