<script>
import { store } from "../../store";
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  data() {
    return {
      store,
      breakpoints: {
        576: { perPage: 2, spacePadding: 10 },
        768: { perPage: 3, spacePadding: 10 },
        992: { perPage: 4, spacePadding: 10 },
        1200: { perPage: 5, spacePadding: 10 }
      }
    };
  },
  components: { Carousel, Slide },
  created() {
    store.fetchApartmentsSponsor();
  }
});
</script>




<template>
  <div class="carousel-wrapper">
    <div class="text-center title-ev">
      <div>
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
        Alloggi Infestati in evidenza...
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
      </div>
    </div>
    <Carousel :autoplay="2500" :wrapAround="true" :transition="500" :breakpoints="breakpoints">
      <Slide v-for="(apartment, index) in store.sponsoredApartments.sponsored_apartments" :key="index">
        <div class="carousel__item">
          <router-link :to="{ name: 'details', params: { slug: apartment.slug } }">
            <img :src="apartment.image" class="carousel-img" :alt="apartment.title">
            <h5 class="titoloslider">{{ apartment.title }}</h5>
          </router-link>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>





<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

.title-ev {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3px 10px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
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
  text-shadow: -1px -1px 0 #000;
}

.carousel__item {
  box-sizing: border-box;
  padding: 10px;
}

.carousel-img {
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

@media (min-width: 1200px) {
  .carousel-img {
    height: 300px;
  }
}

@media (max-width: 1199px) {
  .carousel-img {
    height: 250px;
  }
}

@media (max-width: 992px) {
  .carousel-img {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .carousel-img {
    height: 150px;
  }
}

@media (max-width: 576px) {
  .carousel-img {
    height: 100px;
  }
}
</style>
