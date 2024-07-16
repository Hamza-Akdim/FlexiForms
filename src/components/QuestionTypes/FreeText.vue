<template>
  <v-card class="card-parent">
    <div class="close-btn">
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>

    <div class="title">
      <v-card-title>What would you like to know?</v-card-title>
    </div>

    <div class="subtitle">
      <v-card-subtitle>This is an example servey</v-card-subtitle>
    </div>

    <div class="input-text">
      <v-text-field
        variant="outlined"
        placeholder="Type your answer here?"
        required
      ></v-text-field>
    </div>

    <div class="next-btn">
      <button type="button" class="btn btn-primary" style="color: white">
        Next
      </button>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FreeText",
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

.title {

}

.input-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px ;
  padding: 15px;
}

.next-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
}
</style>
