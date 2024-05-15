<script>
import { store } from '../../store';

export default {
  // ricevo il contenuto dell'appartamento via props
  props: { apartment: Object },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col">
    <router-link :to="{ name: 'details', params: { slug: apartment.slug } }" class="card-btn">
      <div class="card bg-dark text-white h-100" :class="{ 'sponsored-border': apartment.sponsored }">
        <div class="cover">
          <img v-if="apartment.image" :src="apartment.image" class="card-img-top" />
        </div>
        <div class="card-body">
          <h5 class="card-title"><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ apartment.title }}</h5>

          <div v-if="apartment.sponsored" class="sponsored-star">
            <font-awesome-icon icon="fa-solid fa-star" beat size="lg" style="color: #FFD43B;" />
          </div>

          <p>{{ apartment.address }}</p>
          <p v-if="apartment.distance"><strong>{{ apartment.distance }}</strong> Km dalla ricerca</p>
          <!-- <p v-else="apartment.distance === 0"><strong>{{ apartment.distance }}</strong> -->
          <!-- <span></span>
          </p> -->

        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .sponsored-border {
    border: 5px solid #fab005;
  }

  .card-btn {
    cursor: pointer;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.02);
  }

  .cover {
    height: 170px;
    overflow: hidden;

    img {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .sponsored-star {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
}
</style>
