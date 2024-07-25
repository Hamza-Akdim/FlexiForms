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
      freeText: {
        data: {
          question: "What would you like to know?",
          description: "This is an example servey",
          placeholder: "Type your answer here?",
          inputType: "text",
        },
      },

      signleSelect: {
        data: {
          question: "What do you do?",
          description: "Can't do both",
          options: ["Option 1", "Option 2"],
        },
      },
    };
  },

  methods: {
    addOption(index, label) {
      this.singleSelectData.options(index, 0, label);
    },
  },

  provide() {
    return {
      freeText: this.freeText,
      signleSelect: this.signleSelect,
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
