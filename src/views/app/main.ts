import "lib-flexible";
import { createApp } from "vue";
import App from "./App.vue";
import "./App.less";

import { Toast } from "../../components/toast";

createApp(App).use(Toast).mount("#app");
