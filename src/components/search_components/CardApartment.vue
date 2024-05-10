<script>
export default {
  // ricevo il contenuto dell'appartamento via props
  props: { apartment: Object },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="col">
    <router-link :to="{ name: 'details', params: { slug: apartment.slug } }" class="card-btn">
      <div class="card h-100">
        <div class="cover">
          <img v-if="apartment.image" :src="apartment.image" class="card-img-top" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ apartment.title }}</h5>
          <p>{{ apartment.address }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .card-btn {
    cursor: pointer;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.02);
  }

  .cover {
    position: relative;

    .badge.type {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .tech {
      position: absolute;
      bottom: 15px;
      left: 15px;
    }
  }
}
</style>
