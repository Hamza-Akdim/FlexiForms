<template>
  <div class="formQuestion">
    <div class="scroll-div">
        <FreeText />
        <SingleSelect />
        <AddQuestion />
        <AddQuestion />
        <AddQuestion />        
    </div>
  </div>
</template>

<script>
import AddQuestion from "./Questions/AddQuestion.vue";
import FreeText from "./Questions/FreeText.vue";
import SingleSelect from "./Questions/SingleSelect.vue";


export default {
  name: "FormQuestions",
  components: {
    FreeText,
    SingleSelect,
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
