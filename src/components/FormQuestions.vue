<template>
  <div class="formQuestion">
    <div class="scroll-div">
      <NavBar />

      <div style="width: 85%; padding-top: 5rem;">
        <NewForm />
        <AddQuestion />
        <ThankQuestion />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./Diverse/NavBar.vue";
import AddQuestion from "./Questions/AddQuestion.vue";
import NewForm from "./Questions/NewForm.vue";
import ThankQuestion from "./Questions/ThankQuestion.vue";

export default {
  name: "FormQuestions",
  inject: ["survey"],
  components: {
    NavBar,
    AddQuestion,
    NewForm,
    ThankQuestion
  },
};
</script>

<style scoped>
.formQuestion {
  width: 50vw;
  height: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252/var(--tw-bg-opacity));
}

.scroll-div {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  overflow: auto;
  position: relative;
  z-index: 0;
  padding-bottom: 15px;
}
</style>
