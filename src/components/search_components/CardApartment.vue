<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="col">
    <!-- <router-link
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="card-btn"
    > -->
    <div class="card h-100">
      <div class="cover">
        <img src="../../img/background-home.jpg" class="card-img-top" />
      </div>
      <div class="card-body">
        <h5 class="card-title">titolo prova</h5>
      </div>
    </div>
    <!-- </router-link> -->
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
