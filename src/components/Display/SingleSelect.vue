<template>
  <v-card class="card-parent">
    <div class="close-btn">
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>

    <div class="title">
      <v-card-title>{{ singleSelect.data.question }}</v-card-title>
    </div>

    <div class="subtitle">
      <v-card-subtitle>{{ singleSelect.data.description }}</v-card-subtitle>
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

  inject: ["singleSelect"],
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
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 50%;
  margin-top: 10px;
  padding: 15px;
}

.next-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
}
</style>
