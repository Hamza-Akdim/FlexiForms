<template>
  <div class="nav-bar">
    <v-toolbar density="compact" style="background-color: rgb(0,51,102); color: white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title >FlexiForms</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="button" variant="outlined" style="color: white;"> Save </v-btn>
      <v-btn class="button" variant="outlined" style="color: white;"> Publish </v-btn>

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
.nav-bar {
  width:100vw;
  height: 8%;
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
