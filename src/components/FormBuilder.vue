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
      currentQuestion: null,
      survey: []
    };
  },

  provide() {
    return {
      currentQuestion: this.currentQuestion,
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
