<template>
  <div class="formDispaly">
    <div class="parent">
      <div> </div>
      <FreeText />
    </div>
  </div>
</template>

<script>
import FreeText from './QuestionTypes/FreeText.vue'
export default {
  name: "FormDisplay",
  components: {
    FreeText
  }
};
</script>

<style scoped>
.formDispaly {
  width: 50vw;
  height: 100%;
  background-color: rgb(129, 110, 110);
  display: flex;
  justify-content: center;
  align-items: center;
}
.parent {
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
