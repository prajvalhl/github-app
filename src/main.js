import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vuesweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//firebase
import "firebase/auth";
import firebaseConfig from "./utils/config";
import { initializeApp } from "@firebase/app";
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueSweetalert2);
app.mount("#app");
