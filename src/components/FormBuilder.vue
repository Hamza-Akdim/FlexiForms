<template>
  <div class="parent">
    <FormHeader />
    <div class="parent1">
      <FormQuestions />
      <FormDisplay />
    </div>
  </div>
</template>

<script>
import FormQuestions from "./FormQuestions.vue";
import FormDisplay from "./FormDisplay.vue";
import FormHeader from "./FormHeader.vue";

export default {
  name: "FormBuilder",

  components: {
    FormQuestions,
    FormDisplay,
    FormHeader,
  },

  data() {
    return {
      // freeText: {
      //   question: "What would you like to know?",
      //   description: "This is an example servey",
      //   placeholder: "Type your answer here?",
      //   inputType: "text",
      // },

      // singleSelect: {
      //   question: "What do you do?",
      //   description: "Can't do both",
      //   options: [],
      // },

      // multiSelect: {
      //   question: "What motivates you in your job?",
      //   description: "You can select more that one option",
      //   options: [],
      // },

      survey: [],
    };
  },

  provide() {
    return {
      // freeText: this.freeText,
      // singleSelect: this.singleSelect,
      // multiSelect: this.multiSelect,
      survey: this.survey,
    };
  },
};
</script>

<style scoped>
.parent {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.parent1 {
  display: flex;
  height: 92%;
  justify-content: space-between;
  align-items: center;
}
</style>
