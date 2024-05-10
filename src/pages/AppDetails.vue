<script>
import AppMain from "../components/AppMain.vue";
import AppApartmentDetails from "../components/details_components/AppApartmentDetails.vue";
import axios from "axios";
import { store, api } from "../store";


export default {
  data() {
    return {
      store,
      api,
      apartment: {},

    };
  },

  components: { AppMain, AppApartmentDetails },

  methods: {
    fetchApartmentDetails() {

      const apartmentSlug = this.$route.params.slug;
      axios
        .get(`http://127.0.0.1:8000/api/apartments/${apartmentSlug}`)
        .then((response) => {
          console.log(response.data);
          this.apartment = response.data;
        });
    },
  },

  created() {
    this.fetchApartmentDetails();
  }


};

</script>

<template>
  <div class="container-app-details">
    <AppApartmentDetails :apartment="this.apartment">



    </AppApartmentDetails>
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