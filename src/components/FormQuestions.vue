<template>
  <div class="formQuestion">
    <div class="scroll-div">
      <QuestionsComponent />
      <AddQuestion />
      <AddQuestion />
      <AddQuestion />
      <AddQuestion />
    </div>
  </div>
</template>

<script>
import AddQuestion from "./Questions/AddQuestion.vue";
import QuestionsComponent from "./Questions/QuestionsComponent.vue";

export default {
  name: "FormQuestions",
  components: {
    QuestionsComponent,
    AddQuestion,
  },
};
</script>

<style scoped>
.formQuestion {
  width: 55vw;
  height: 100%;
}

.scroll-div {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  padding: 3rem 0 2rem 0;
  overflow: auto;
}
</style>
