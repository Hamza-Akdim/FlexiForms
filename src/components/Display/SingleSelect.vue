<template>
  <v-card class="card-parent">
    <div class="close-btn">
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>

    <div class="title">
      <v-card-title>{{ survey[survey.length - 1].data.question }}</v-card-title>
    </div>

    <div class="subtitle">
      <v-card-subtitle>{{ survey[survey.length - 1].data.description }}</v-card-subtitle>
    </div>

    <div class="input-text">
      <SingleSelectInput />
    </div>

    <div class="next-btn">
      <button type="button" class="btn btn-primary" style="color: white">
        Next
      </button>
    </div>
  </v-card>
</template>

<script>
import SingleSelectInput from "../Diverse/SingleSelectInput.vue";

export default {
  name: "single-select-display",

  components: {
    SingleSelectInput,
  },

  inject: ["survey"],
};
</script>

<style scoped>
.card-parent {
  height: 80%;
  width: 80%;
  padding: 15px;
}
.close-btn {
  display: flex;
  justify-content: flex-end;
}

.input-text {
  height: 45%;
  margin-top: 10px;
  padding: 9px 15px 15px 15px;
}

.next-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
}


</style>
