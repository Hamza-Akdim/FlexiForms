<template>
  <template v-for="form in survey" :key="form.id">
    <FreeText
      v-if="form.type === 'freeText'"
      :questionNumber="form.number"
    />
    <SingleSelect 
      v-if="form.type === 'singleSelect'"
      :questionNumber="form.number"
    />
    <MultiSelect
      v-if="form.type === 'multiSelect'"
      :questionNumber="form.number"
    />
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

  beforeMount() {
    this.survey.push({
      id: Date.now(),
      type: "freeText",
      data: {
        question: "What would you like to know?",
        description: "This is an example servey",
        placeholder: "Type your answer here?",
        inputType: "text",
      },
      number: 1,
    });
  },
};
</script>

<style scoped></style>
