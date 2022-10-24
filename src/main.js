import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import Contacts from "./components/Contacts.vue";
import AboutUs from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";
import PageNotFound from "./components/PageNotFound.vue";
import TestApi from "./components/TestApi.vue";


const baseRoutes = [
  { path: "/contacts", component: Contacts },
  { path: "/aboutUs", component: AboutUs },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
  { path: "/testApi", component: TestApi }
];

const yourRoutes = [
  { path: "/contacts/:name", component: Contact },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes.concat(yourRoutes)
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
