import { createApp } from "vue";

// Vuetify
// import "vuetify/styles";
// import "@mdi/font/css/materialdesignicons.css";
import "./plugins/vuetify";
import "./main.css"
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
