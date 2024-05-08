<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
// import AppSearch from "./components/AppSearch.vue";

export default {
  data() {
    return {
      title: "Boo House"
    };
  },

  components: { AppHeader, AppMain, AppFooter },

}

</script>

<template>

  <AppHeader></AppHeader>


  <router-view></router-view>
  <AppFooter></AppFooter>

</template>

<style lang="scss">
@use "./styles/general.scss";

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

;
</style>
