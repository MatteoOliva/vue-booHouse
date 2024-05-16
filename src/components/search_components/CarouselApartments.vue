<script>
import { store } from "../../store";
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default defineComponent({
  components: { Swiper, SwiperSlide },
  data() {
    return {
      store,
      slidesPerView: 5,
    };
  },
  created() {
    store.fetchApartmentsSponsor();
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlidesPerView);
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
  },
});
</script>







<template>
  <div class="carousel-wrapper">
    <div class="text-center title-ev">
      <div class="evidenza-alloggi">
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
        Alloggi Infestati in evidenza...
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
      </div>
    </div>
    <swiper :slides-per-view="slidesPerView" :space-between="20" :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }" pagination>
      <swiper-slide v-for="(apartment, index) in store.sponsoredApartments.sponsored_apartments" :key="index">
        <div class="carousel__item">
          <router-link :to="{ name: 'details', params: { slug: apartment.slug } }">
            <img :src="apartment.image" class="carousel-img" :alt="apartment.title">
            <h5 class="titoloslider">{{ apartment.title }}</h5>
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
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
    font-size: 20px
  }
}

@media (max-width: 768px) {
  .carousel-img {
    height: 250px;
    /* Uniform height for all screen sizes */
  }

  .evidenza-alloggi {
    font-size: 18px
  }
}

@media (max-width: 576px) {
  .carousel-img {
    height: 250px;
    /* Uniform height for all screen sizes */
  }

  .evidenza-alloggi {
    font-size: 12px;
  }
}
</style>
