<template>
  <v-app>
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },
};
</script>

<style lang="scss">
@import url("./assets/fonts/Kanzlei-Initialen/Kanzlei-Initialen.css");
@import url("./assets/fonts/SourceSerifPro/SourceSerifPro.css");

p {
  font-size: 18px;
  text-align: left;
}
</style>
