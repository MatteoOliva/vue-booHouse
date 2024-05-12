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
  <div class="container-card">

    <div class="card main-card">

      <div class="row">

        <div class="col-6 text-center mt-4">
          <h2>Alloggio: <strong>{{ apartment.title }}</strong></h2>

          <div class="row">
            <h4 class="col-12">{{ apartment.address }}</h4>
          </div>

          <div class="row mt-5">
            <div class="col-6">
              <h5>Metri Quadri: {{ apartment.mq }}</h5>
            </div>
            <div class="col-6">
              <h5>Camere: {{ apartment.rooms }}</h5>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <h5>Letti: {{ apartment.beds }}</h5>
            </div>
            <div class="col-6">
              <h5>Bagni: {{ apartment.toilets }}</h5>
            </div>
          </div>

        </div>

        <div class="col-6">

          <div class="container-main-img">
            <img v-if="apartment.image" :src="apartment.image" class="" />
          </div>

        </div>

      </div>


      <div class="row">

        <div class="col-12 mt-4 text-center">
          <h5>{{ apartment.description }}</h5>
        </div>

      </div>

      <div>
        <message-button v-if="apartment" :apartment_id="this.apartment.id"></message-button>
      </div>

    </div>

  </div>
  {{ apartment }}


  <!-- <div class="card-body">
    <h5 class="card-title">{{ apartment.title }}</h5>
    <p>{{ apartment.address }}</p>
  </div>
</div> -->
  <!-- </router-link> -->
  <!-- </div> -->



</template>

<style lang="scss" scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 2px dashed red;

  .main-card {


    padding: 3%;
    width: 90%;
    height: 90%;
    box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.7);

    .container-main-img {
      border-radius: 15px;
      height: 300px;
      overflow: hidden;




      img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
      }

    }

  }
}
</style>
