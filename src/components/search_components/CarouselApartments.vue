<script>
import axios from "axios";

// importo store
import { store, api } from "../../store";

// importo card
import CardApartment from "./CardApartment.vue";

export default {
  data() {
    return {
      store,
      api,
    };
  },

  components: { CardApartment },

  created() {
    store.fetchApartmentsSponsor();
  },
};
</script>

<template>


  <div id="carouselExampleInterval" class="carousel slide carosello" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" :class="index == 0 ? 'active' : ''" data-bs-interval="2000"
        v-for="(apartment, index) in store.apartments">
        <img :src="apartment.image" class="d-block w-100" :alt="apartment.title">
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.carosello {

  height: 200px;

}
</style>
