<template>
  <div class="formQuestion">
    <div class="scroll-div">
      <QuestionsComponent />
      <AddQuestion />
    </div>
  </div>
</template>

<script>
import AddQuestion from './Questions/AddQuestion.vue';
import QuestionsComponent from "./Questions/QuestionsComponent.vue"

export default {
  name: "FormQuestions",
  components : {
    QuestionsComponent,
    AddQuestion
  }
};
</script>

<style scoped>
.formQuestion {
  width: 60vw;
  height: 100vh; 
  background-color: rgb(92, 78, 78);
}

.scroll-div{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  overflow: auto;
  background-color: aquamarine;
}
</style>
