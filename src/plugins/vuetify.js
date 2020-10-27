import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const mq = window.matchMedia("(prefers-color-scheme: dark)");

export const vuetify = new Vuetify({
  theme: { dark: mq.matches },
});

mq.addEventListener("change", (e) => {
  vuetify.framework.theme.dark = e.matches;
});

export default vuetify;
