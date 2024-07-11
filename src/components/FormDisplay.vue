<template>
  <v-sheet class="formDispaly">
    <v-sheet :rounded="true" class="countainer"></v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "FormDisplay",
};
</script>

<style>
.formDispaly {
  width: 50vw;
  height: 100vh;
  background-color: rgb(129, 110, 110);
  display: flex;
  justify-content: center;
  align-items: center;
}
.countainer{
  width: 80%;
  height: 70%;
  background-color: white;
}
</style>
