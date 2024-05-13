<script>
import axios from "axios";

// importo store
import { store, api } from "../../store";

// importo card
// import CardApartment from "./CardApartment.vue";

export default {
  data() {
    return {
      store,
      api,
    };
  },

  // components: { CardApartment },
  created() {
    store.fetchApartmentsSponsor();
  },
};
</script>

<template>
  <div class="container-carousel">

    <div class="text-center title-ev">
      <div>Alloggi Infestati in evidenza...</div>
    </div>
    < <div id="carouselExampleInterval" class="carousel slide carosello" data-bs-ride="carousel">
      <div class="carousel-inner" style="height: 400px; border-radius: 50px;">
        <div class="carousel-item" :class="index == 0 ? 'active' : ''" data-bs-interval="2000"
          v-for="(apartment, index) in store.sponsoredApartments.sponsored_apartments">
          <img :src="apartment.image" class="d-block w-100"
            style="height: 500px; width: auto; object-fit: cover; border-radius: 50px;" :alt="apartment.title">
        </div>

      </div>

  </div>

  </div>

</template>

<style lang="scss" scoped>
.container-carousel {
  position: relative;

  .title-ev {
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    z-index: 1;

    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.carosello {

  height: 100px;

  img: {
    // max-height: 100%;
  }
}
</style>
