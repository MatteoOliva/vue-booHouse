<script>
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },

  created() {
    store.fetchApartmentsSponsor();
  },
};
</script>

<template>
  <div class="carousel-wrapper">
    <!-- titolo alloggi in evidenza -->
    <div class="text-center title-ev">
      <div class="evidenza-alloggi">
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
        Alloggi Infestati in evidenza...
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
      </div>
    </div>
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

@media (max-width: 992px) {
  .evidenza-alloggi {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .evidenza-alloggi {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .evidenza-alloggi {
    font-size: 12px;
  }
}
</style>
