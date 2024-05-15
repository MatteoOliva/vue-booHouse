<script>
// importo componente ivia messaggio
import MessageButton from "./MessageButton.vue";

export default {
  props: { apartment: Object },

  components: { MessageButton },

  data() {
    return {};
  },

  mounted() {
    // Altre operazioni di inizializzazione
  },

  watch: {
    apartment: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.initMap();
        }
      }
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    initMap() {
      if (this.apartment && this.apartment.lon && this.apartment.lat) {
        this.$nextTick(() => {
          var map = tt.map({
            key: 'Ad782pZsh2pBDjQwfgOfANAh3h59eK4D',
            container: 'map',
            center: [this.apartment.lon, this.apartment.lat],
            zoom: 15
          });
          var marker = new tt.Marker().setLngLat([this.apartment.lon, this.apartment.lat]).addTo(map);
        });
      }
    },
  }
}


</script>

<template>

  <div class="container">

    <button @click="goBack" class="btn  my-3" style="background-color: #fab005;">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      Torna agli Alloggi
    </button>
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
                    <div>

                      <img :src="service.icon" alt="" style="width: 50px" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 container-first-image">
            <div class="container-main-img">
              <img v-if="apartment.image" :src="apartment.image" class="" />
              <div class="butt-search">
                <message-button v-if="apartment" :apartment="this.apartment">
                  <font-awesome-icon icon="fa-regular fa-envelope" class="logo-search" /></message-button>
              </div>
            </div>
          </div>
        </div>

        <div class="row flex-column ">
          <div class="col-12 d-flex mt-4 text-center">
            <h5>{{ apartment.description }}</h5>
          </div>
        </div>
        <!-- maps -->
        <div class="row justify-content-center my-3">

          <div v-if="apartment.lon && apartment.lat" class="col-12">
            <div id="map" style="width: 100%; height: 200px;" class="rounded-4"></div>
          </div>



        </div>

        <!-- <div class="d-flex justify-content-between">
        <button @click="goBack" class="btn btn-primary">
          Torna agli Alloggi
        </button>
        
        <message-button v-if="apartment" :apartment="this.apartment"></message-button>
      </div> -->

      </div>
    </div>
    <div></div>

  </div>
</template>

<style lang="scss" scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;


  .main-card {
    padding: 1%;
    width: 100%;
    height: 90%;
    box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.7);
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
    scrollbar-width: none;

    .container-main-img {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      height: 300px;
      overflow: hidden;
      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.7);


      .img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
      }


    }

    .container-first-image {
      position: relative;

      .butt-search {
        position: absolute;
        top: 30px;
        right: 30px;
      }
    }

  }
}
</style>
