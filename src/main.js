import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import store from "./store/index.js";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from './components/ui/BaseButton.vue'
import BaseLink from './components/ui/BaseLink.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'
import TheHeader from './components/nav/TheHeader.vue'

const app = createApp(App);
app.component('TheHeader',TheHeader)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-link',BaseLink)
app.component('base-spinner',BaseSpinner)
app.use(router);
app.use(store);
app.mount("#app");
