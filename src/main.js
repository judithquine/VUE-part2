import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Contacts from "./components/Contacts.vue";
import AboutUs from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes = [
  { path: "/contacts", component: Contacts },
  { path: "/aboutUs", component: AboutUs },
  { path: "/contacts/:name", component: Contact },
  { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);

app.use(router);
app.mount("#app");
