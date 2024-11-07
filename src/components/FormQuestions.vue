<template>
  <div class="h-full max-w-[1500px] mx-auto flex flex-col items-center gap-4 relative z-0 pb-5">
    <NavBar />

    <div class="h-full pt-20 pb-3 overflow-auto w-full">
      <NewForm />
      <AddQuestion />
      <ThankQuestion />
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
    ThankQuestion,
  },
};
</script>

<style scoped>
.scroll-div {
  /* height: 100%; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  /* overflow: auto; */
  position: relative;
  z-index: 0;
  padding-bottom: 15px;
}
</style>
