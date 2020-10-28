import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const mq = window.matchMedia("(prefers-color-scheme: dark)");
if (!localStorage.isDark) {
  localStorage.isDark = mq.matches;
}

export const vuetify = new Vuetify({
  theme: { dark: localStorage.isDark === "true" },
  icons: { iconfont: "mdi" },
});

mq.addEventListener("change", (e) => {
  vuetify.framework.theme.dark = e.matches;
  localStorage.isDark = e.matches;
});

export default vuetify;
