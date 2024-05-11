<script>
// importo componente ivia messaggio
import MessageButton from "./MessageButton.vue";

export default {
  props: { apartment: Object },

  data() {
    return {};
  },

  components: { MessageButton },
};
</script>

<template>
  <!-- <div class="col"> -->
  <!-- <router-link
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="card-btn"
    > -->
  <!-- <div class="card h-100"> -->
  <div class="cover">
    <img v-if="apartment.image" :src="apartment.image" class="card-img-top" />
  </div>
  <h5>{{ apartment }}</h5>
  <!-- <div class="card-body">
        <h5 class="card-title">{{ apartment.title }}</h5>
        <p>{{ apartment.address }}</p>
      </div>
    </div> -->
  <!-- </router-link> -->
  <!-- </div> -->

  <!-- BOTTONE INVIA MESSAGGIO -->
  <message-button></message-button>
</template>

<style lang="scss" scoped></style>
