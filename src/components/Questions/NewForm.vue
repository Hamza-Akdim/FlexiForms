<template>
  <FreeText v-if="newSurvey.data.add === 'freeText'" style="margin-top: 10px" />
  <SingleSelect v-if="newSurvey.data.add === 'singleSelect'" />
  <MultiSelect v-if="newSurvey.data.add === 'multiSelect'" />
</template>

<script>
import FreeText from "./FreeText.vue";
import MultiSelect from "./MultiSelect.vue";
import SingleSelect from "./SingleSelect.vue";

export default {
  name: "new-form",

  mounted() {
    this.newSurvey.data.add = "";
  },

  inject: ["newSurvey"],
  components: {
    FreeText,
    SingleSelect,
    MultiSelect,
  },

  // watch: {
  //   newSurvey: {
  //     immediate: true,
  //     deep: true,
  //     handler: function (newValue, oldValue) {
  //       if (newValue.data.update != oldValue.data.update) {
  //         console.log("I AM HERE");
  //         this.newSurvey.data.update = false;
  //       }
  //     },
  //   },
  // },
};
</script>

<style scoped></style>
