<template>
  <div class="hidden sm:block w-full h-full overflow-hidden">
    <FormHeader />
    <!-- 92% to limit the height to not overcome the screen heigth because of FormQuestion Content -->
    <div class="grid md:grid-cols-2 h-[92%]">
      <div class="overflow-y-auto relative z-0">
        <FormQuestions />
      </div>

      <div class="hidden md:block">
        <FormDisplay />
      </div>
    </div>
  </div>

  <div
    class="sm:hidden h-full flex flex-col justify-center items-center gap-3 p-3"
  >
    <img class="" src="disabled.png" alt="/" />
    <div class="text-center text-xl font-medium text-gray-500">
      FlexiForms is not availible for devices with smaller resolutions.
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
      survey: [],
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

<style scoped></style>
