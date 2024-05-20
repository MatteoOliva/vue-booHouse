<script>
import axios from "axios";
import { store, api } from "../../store";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { register } from "swiper/element/bundle";

// Import Swiper styles

// import required modules

import { Autoplay, Navigation, Pagination } from "swiper/modules";

register();

export default defineComponent({
  props: { apartments: Array },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      store,
      api,
      slidesPerView: 5,
    };
  },
  created() {
    // store.fetchApartmentsSponsor();
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener("resize", this.updateSlidesPerView);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      const width = window.innerWidth;
      if (width < 576) {
        this.slidesPerView = 1;
      } else if (width < 768) {
        this.slidesPerView = 2;
      } else if (width < 992) {
        this.slidesPerView = 3;
      } else if (width < 1200) {
        this.slidesPerView = 4;
      } else {
        this.slidesPerView = 5;
      }
    },

    registerView(apartment) {
      // const apartment_id = this.apartment.id;
      // console.log("id appartamento " + apartment_id);
      //chiamo l'api tramite axios
      axios.get(api.basicsUrl + "/view/" + apartment.id);
    },
  },
});
</script>

<template>
  <div class="carousel-wrapper" v-if="apartments">
    <h1 class="text-white text-center creepster-regular evidenza-alloggi">
      <font-awesome-icon icon="fa-solid fa-skull-crossbones" /> Prenota la tua
      fuga da favola...con un tocco di mistero!
      <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
    </h1>

    <swiper
      :slides-per-view="slidesPerView"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :speed="3000"
    >
      <swiper-slide v-for="(apartment, index) in apartments" :key="index">
        <div class="carousel__item">
          <router-link
            @click="registerView(apartment)"
            :to="{ name: 'details', params: { slug: apartment.slug } }"
            style="text-decoration: none"
          >
            <img
              :src="apartment.image"
              class="carousel-img"
              :alt="apartment.title"
            />
            <h5 class="titoloslider">{{ apartment.title }}</h5>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import "/node_modules/swiper/swiper-bundle.css";

@import "/node_modules/swiper/modules/pagination.css";
@import "/node_modules/swiper/modules/navigation.css";

.evidenza-alloggi {
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000, -2px 0px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000,
    0px 2px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000,
    3px 3px 0 #000, -3px 0px 0 #000, 3px 0px 0 #000, 0px -3px 0 #000,
    0px 3px 0 #000;
}

.carousel-wrapper {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  background-color: rgba($color: #000000, $alpha: 0.6);
  padding-top: 30px;
  padding-bottom: 10px;
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
  height: 100%;
  /* Ensuring images take full height */
  object-fit: cover;
  border-radius: 20px;
  aspect-ratio: 1/1;
  /* Making them square */
}

@media (min-width: 1200px) {
  .carousel-img {
    height: 350px;
    /* Uniform height for all screen sizes */
  }
}

@media (max-width: 1199px) {
  .carousel-img {
    height: 300px;
    /* Uniform height for all screen sizes */
  }
}

@media (max-width: 992px) {
  .carousel-img {
    height: 275px;
    /* Uniform height for all screen sizes */
  }

  .evidenza-alloggi {
    font-size: 1.9rem;
  }
}

@media (max-width: 768px) {
  .carousel-img {
    height: 250px;
    /* Uniform height for all screen sizes */
  }

  .evidenza-alloggi {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .carousel-img {
    height: 250px;
    /* Uniform height for all screen sizes */
  }

  .evidenza-alloggi {
    font-size: 1.2rem;
  }
}
</style>
