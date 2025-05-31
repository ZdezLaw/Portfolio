import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./resources/PubliFluorNormale.otf";

const app = createApp(App);
app.use(router);
app.mount("#app");
