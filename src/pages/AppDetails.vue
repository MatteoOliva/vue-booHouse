<script>
import AppMain from "../components/AppMain.vue";
import AppApartmentDetails from "../components/details_components/AppApartmentDetails.vue";
import axios from "axios";
import { store, api } from "../store";

export default {
  data() {
    return {

    };
  },

  components: { AppMain, AppApartmentDetails },
};

</script>

<template>
    <div class="container-app-details">
        <AppApartmentDetails />
    </div>
</template>

<style lang="scss" scoped>
.container-app-details {
    height: calc(100vh - 170px);
    flex-grow: 1;
    background-color: gray;
    background-image: url(/src/img/background-search.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: auto;
    }
</style>