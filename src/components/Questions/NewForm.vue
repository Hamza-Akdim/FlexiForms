<template>
  <template v-for="(form) in survey" >
    {{ console.log(survey) }}
    <FreeText v-if="form.type === 'freeText'" :key="form.number" style="margin-top: 10px" :surveyNumber="form.number"/>
    <SingleSelect v-if="form.type === 'singleSelect'" :key="form.number" :surveyNumber="form.number" />
    <MultiSelect v-if="form.type === 'multiSelect'" :key="form.number" :surveyNumber="form.number" />
  </template>
</template>

<script>
import FreeText from "./FreeText.vue";
import MultiSelect from "./MultiSelect.vue";
import SingleSelect from "./SingleSelect.vue";

export default {
  name: "new-form",

  inject: ["survey"],
  components: {
    FreeText,
    SingleSelect,
    MultiSelect,
  },
};
</script>

<style scoped>

</style>
