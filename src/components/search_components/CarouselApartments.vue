<script>
import axios from "axios";

// importo store
import { store, api } from "../../store";

// importo card
import CardApartment from "./CardApartment.vue";

export default {
  data() {
    return {
      store,
      api,
    };
  },

  components: { CardApartment },

  created() {
    store.fetchApartmentsSponsor();
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
      <card-apartment
        v-for="apartment in store.apartments"
        :apartment="apartment"
      >
      </card-apartment>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
