<template>
    <v-card style="height: 80%; width: 80%;">
      <div style="display: flex; justify-content: flex-end">
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
  
      <div style="display: flex; justify-content: flex-start;">
        <v-card-title>What would you like to know?</v-card-title>
      </div>
  
      <v-card-subtitle>This is an example servey</v-card-subtitle>
  
      <v-text-field
        variant="outlined"
        placeholder="Type your answer here?"
        required
      ></v-text-field>
  
      <button type="button" class="btn btn-primary" style="color: white">
        Next
      </button>
    </v-card>
  
</template>

<script>
export default {
  name: "FreeText",
};
</script>

<style scoped>


</style>
