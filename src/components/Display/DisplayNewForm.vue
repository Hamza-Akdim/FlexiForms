<template>
  <FreeText v-if="survey[survey.length - 1].type === 'freeText'" />
  <SingleSelect v-if="survey[survey.length - 1].type === 'singleSelect'" />
  <MultiSelect v-if="survey[survey.length - 1].type === 'multiSelect'" />
  <RatingDisplay v-if="survey[survey.length - 1].type === 'rating'" />
</template>

<script>
import FreeText from "./FreeText.vue";
import SingleSelect from "./SingleSelect.vue";
import MultiSelect from "./MultiSelect.vue";
import RatingDisplay from "./RatingDisplay.vue";

export default {
  name: "display-new-form",
  components: {
    FreeText,
    SingleSelect,
    MultiSelect,
    RatingDisplay
  },
  inject: ["survey"],
};
</script>

<style scoped></style>
