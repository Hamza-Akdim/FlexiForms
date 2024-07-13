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
  background-color: rgb(92, 78, 78);
}

.scroll-div {
  background-color: azure;
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 8px;
  flex-direction: column;
  padding-top: 10px;
  overflow: auto;
}
</style>
