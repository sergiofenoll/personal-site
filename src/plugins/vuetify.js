import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const mq = window.matchMedia("(prefers-color-scheme: dark)");

export default new Vuetify({
  theme: { dark: mq.matches },
});

mq.addEventListener("change", (e) => {
  Vuetify.framework.theme.dark = e.matches;
});
