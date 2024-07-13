<template>
  <div class="navbar">
    <v-toolbar density="compact" style="height: 100%;">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title style="color: black">FlexiForms</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="button" variant="outlined"> Save </v-btn>
      <v-btn class="button" variant="outlined"> Publish </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
};
</script>

<style scoped>
.navbar {
  width:100vw;
  height: 4vw;
  /* position: fixed; */
}

.button {
  margin-left: 10px;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  color: black;
  width: 6%;
}
</style>
