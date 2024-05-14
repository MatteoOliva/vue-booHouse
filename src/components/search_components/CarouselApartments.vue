<script>
// import axios from "axios";
// importo store
import { store, api } from "../../store";
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
// importo card
// import CardApartment from "./CardApartment.vue";

export default defineComponent({
  data() {
    return {
      store,
      api,
    };
  },

  components: { Carousel, Slide, Pagination },

  created() {
    store.fetchApartmentsSponsor();
  },
  methods: {

  },

});
</script>

<template>
  <!-- <div class="container-carousel">

    < <div id="carouselExampleInterval" class="carousel slide carosello" data-bs-ride="carousel">
      <div class="carousel-inner" style="height: 400px; border-radius: 50px;">
        <div class="carousel-item" :class="index == 0 ? 'active' : ''" data-bs-interval="2000"
          v-for="(apartment, index) in store.sponsoredApartments.sponsored_apartments">
          <img :src="apartment.image" class="d-block w-100"
            style="height: 500px; width: auto; object-fit: cover; border-radius: 50px;" :alt="apartment.title">
        </div>

      </div>

  </div>

  </div> -->
  <div class="text-center title-ev">
    <div>Alloggi Infestati in evidenza...</div>
  </div>
  <Carousel :autoplay="2500" :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="(apartment, index) in store.sponsoredApartments.sponsored_apartments" :key="index">
      <div class="carousel__item">
        <router-link :to="{ name: 'details', params: { slug: apartment.slug } }">
          <img :src="apartment.image" class="d-block w-100"
            style="height: 180px; width: auto; object-fit: cover; border-radius: 20px;" :alt="apartment.title">
          <h5 class="titoloslider">{{ apartment.title }}</h5>
        </router-link>
      </div>
    </Slide>
  </Carousel>
</template>

<style lang="scss" scoped>
.title-ev {
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  z-index: 1;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.titoloslider {
  text-decoration: none !important;
  color: white;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__item :first-child {
  text-decoration: none;
}
</style>
