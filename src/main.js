import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import router from "./router";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB19cBfItdR-fVwie0jiHFfZrBamFj40_4",
  authDomain: "vue-ecommerce-site-5db70.firebaseapp.com",
  projectId: "vue-ecommerce-site-5db70",
  storageBucket: "vue-ecommerce-site-5db70.appspot.com",
  messagingSenderId: "153390058249",
  appId: "1:153390058249:web:5a61a90e39b6096196e1d8",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
