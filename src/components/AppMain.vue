<script>
import axios from "axios";
import { store, api } from "../store";

import CarouselApartments from "./search_components/CarouselApartments.vue";
import AppCarousel from "./carousel_components/AppCarousel.vue";

export default {
  data() {
    return {
      title: "MAIN",
      store,
      api,
    };
  },

  components: { CarouselApartments, AppCarousel },

  methods: {},
};
</script>

<template>
  <div class="container-main">
    <!-- CAROSELLO -->
    <div class="carousel-container">
      <!-- <carousel-apartments></carousel-apartments> -->
      <app-carousel />
    </div>

    <div class="slogan-search" @click="scrollToSearch()">
      <p class="m-0">
        <font-awesome-icon icon="fa-solid fa-down-long" bounce />
        <font-awesome-icon icon="fa-solid fa-down-long" bounce />
        Trova il tuo alloggio da Paura!
        <font-awesome-icon icon="fa-solid fa-down-long" bounce />
        <font-awesome-icon icon="fa-solid fa-down-long" bounce />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-main {
  width: 100%;
  height: calc(100vh - 170px);
  background-image: url(/src/img/background-home-new.jpg);
  background-position: top;
  background-size: cover;
  position: relative;
  overflow: auto;
  scrollbar-width: none;
}

.carousel-container {
  width: 100%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.slogan-search {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: #fab005;
  text-align: center;
  margin: 0, auto;
  font-size: 2.5rem;
  font-weight: bold;
}

@media screen and (max-width: 1420px) {
  .slogan-search p {
    font-size: 2rem;
  }

  .carousel-container {
    bottom: 15%;
  }
}

@media screen and (max-width: 1180px) {
  .carousel-container {
    bottom: 18%;
  }
}

@media screen and (max-width: 1138px) {
  .slogan-search p {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 992px) {
  .container-main {
    background-image: url(/src/img/background-home-992.jpg);
  }

  .slogan-search p {
    font-size: 1.3rem;
    background-color: rgba($color: #000000, $alpha: 0.7);
    padding: 10px;
    border-radius: 15px;
  }
}

@media screen and (max-width: 768px) {
  .container-main {
    background-image: url(/src/img/background-home-768.jpg);
  }

  .slogan-search p {
    font-size: 0.8rem;
  }

  .carousel-container {
    bottom: 25%;
  }
}

@media screen and (max-width: 576px) {
  .slogan-search p {
    font-size: 0.6rem;
  }
}
</style>
