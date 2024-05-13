<script>
// importo componente ivia messaggio
import MessageButton from "./MessageButton.vue";

export default {
  props: { apartment: Object },

  components: { MessageButton },

  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div class="container-card">
    <div class="card main-card text-white card-grunge-bg">
      <div class="row">
        <div class="col-6 text-center mt-4">
          <h2>
            Alloggio: <strong>{{ apartment.title }}</strong>
          </h2>

          <div class="row">
            <h5 class="col-12 mt-2">{{ apartment.address }}</h5>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <h5>
                Metri Quadri: <strong>{{ apartment.mq }}</strong>
              </h5>
            </div>
            <div class="col-6">
              <h5>
                Camere: <strong>{{ apartment.rooms }}</strong>
              </h5>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6">
              <h5>
                Letti: <strong>{{ apartment.beds }}</strong>
              </h5>
            </div>
            <div class="col-6">
              <h5>
                Bagni: <strong>{{ apartment.toilets }}</strong>
              </h5>
            </div>

            <h4 class="m-0 mt-2"><strong>Servizi Disponili</strong></h4>
            <div class="col-12 d-flex justify-content-evenly gap-4">
              <div v-for="service in apartment.services">
                <div class="d-flex flex-column align-items-center gap-2 mt-1">
                  {{ service.name }}
                  <img :src="service.icon" alt="" style="width: 50px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="container-main-img">
            <img v-if="apartment.image" :src="apartment.image" class="" />
          </div>
        </div>
      </div>

      <div class="row flex-column flex-grow-1">
        <div class="col-12 d-flex mt-4 text-center">
          <h5>{{ apartment.description }}</h5>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <button @click="goBack" class="btn btn-primary">
          Torna agli Alloggi
        </button>

        <message-button
          v-if="apartment"
          :apartment="this.apartment"
        ></message-button>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .main-card {
    padding: 1%;
    width: 70%;
    height: 90%;
    box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.7);
    background-color: rgba(0, 0, 0, 0.7);

    .container-main-img {
      border-radius: 15px;
      height: 300px;
      overflow: hidden;
      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.7);

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
