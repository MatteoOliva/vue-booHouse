<script>
// importo axios
import axios from "axios";
// importo store
import { store, api } from "../../store";

import Swal from "sweetalert2";

export default {
  props: { apartment: Object },

  data() {
    return {
      store,
      api,
      email: "",
      content: "",
    };
  },

  created() {},

  mounted() {},

  watch: {
    apartment: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.initMap();
        }
      },
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    initMap() {
      if (this.apartment && this.apartment.lon && this.apartment.lat) {
        this.$nextTick(() => {
          var map = tt.map({
            key: "Ad782pZsh2pBDjQwfgOfANAh3h59eK4D",
            container: "map",
            center: [this.apartment.lon, this.apartment.lat],
            zoom: 15,
          });
          var marker = new tt.Marker()
            .setLngLat([this.apartment.lon, this.apartment.lat])
            .addTo(map);
        });
      }
    },
    createMessage() {
      if (this.isEmailValid && this.isContentValid) {
        // Form is valid, submit data (e.g., send to server)
        console.log("email inviata con successo");
        // Reset form after successful submission (optional)
        // this.email = "";
        // this.content = "";
      } else {
        // Form is invalid, prevent submission
        console.log("Correggi la email prima di inviarla");
      }

      // salvo dati del form
      let formData = {
        apartment_id: this.apartment.id,
        email: document.getElementById("email").value,
        content: document.getElementById("content").value,
      };

      axios.post(api.basicsUrl + "/message", formData).then((response) => {
        this.isSending = false;
        console.log(response);

        // se la risposta dal db è positiva
        if (response.data.response) {
          Swal.fire({
            position: "center",
            width: 400, // Larghezza della modale, puoi modificarla come desideri

            showConfirmButton: false,
            html: `
              <div style="text-align: center;">
                <img src="/thumbs-up-skull.gif" alt="Success GIF" style="width: 250px; height: 250px;">
                <p class="text-white mt-3">Il messaggio è stato inviato alla struttura</p>
              </div>
            `,
            background: `
            #2d383c
            `,
            padding: "1em", // Rimuove padding extra
            // showClass: {
            //   popup: 'animate__animated animate__fadeInDown'
            // },
            // hideClass: {
            //   popup: 'animate__animated animate__fadeOutUp'
            // }
          });

          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
        // this.resetForm();
      });
    },

    // ricarico la pagina
    // reloadPage() {
    //   window.location.reload();
    // },
    // resetto il form
    resetForm() {
      this.email = "";
      this.content = "";
    },
  },
  computed: {
    isEmailValid() {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      return emailRegex.test(this.email);
    },
    isContentValid() {
      return this.content.length >= 10;
    },
  },
};
</script>

<template>
  <div class="container">
    <button @click="goBack" class="btn my-3" style="background-color: #fab005">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      Torna agli Alloggi
    </button>
    <div class="container-card">
      <div class="card main-card text-white card-grunge-bg">
        <div class="row">
          <div class="col-12 col-lg-6 text-center mt-4">
            <h2>
              Alloggio: <strong>{{ apartment.title }}</strong>
            </h2>
            <div class="row">
              <h5 class="col-12 mt-2">{{ apartment.address }}</h5>
            </div>
            <hr />

            <div class="col-12 d-lg-none container-first-image">
              <div class="container-main-img">
                <img v-if="apartment.image" :src="apartment.image" class="" />
                <div class="butt-search">
                  <!-- PULSANTE MAIL -->
                  <a
                    type="button"
                    class="mail-button text-decoration-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    <div
                      class="container-contact d-flex justify-content-center flex-column"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-envelope"
                        beat
                        style="color: #cc1136"
                      />
                      <div class="m-0 contact-mail">Contatta l'alloggio</div>
                    </div>
                  </a>
                  <!-- <message-button v-if="apartment" :apartment="this.apartment">
                  <font-awesome-icon icon="fa-regular fa-envelope" class="logo-search" />
                </message-button> -->
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6 mt-4">
                <h5>
                  <font-awesome-icon
                    class="text-danger"
                    icon="fa-solid fa-map"
                  />
                  Metri Quadri: <strong>{{ apartment.mq }}</strong>
                </h5>
              </div>
              <div class="col-6 mt-4">
                <h5>
                  <font-awesome-icon
                    class="text-danger"
                    icon="fa-solid fa-person-shelter"
                  />
                  Camere: <strong>{{ apartment.rooms }}</strong>
                </h5>
              </div>
            </div>

            <div class="row">
              <div class="col-6 mt-4">
                <h5>
                  <font-awesome-icon
                    class="text-danger"
                    icon="fa-solid fa-bed"
                  />
                  Letti: <strong>{{ apartment.beds }}</strong>
                </h5>
              </div>
              <div class="col-6 mt-4">
                <h5>
                  <font-awesome-icon
                    class="text-danger"
                    icon="fa-solid fa-bath"
                  />
                  Bagni: <strong>{{ apartment.toilets }}</strong>
                </h5>
              </div>
            </div>
          </div>

          <div class="col-6 d-lg-block d-none container-first-image">
            <div class="container-main-img">
              <img v-if="apartment.image" :src="apartment.image" class="" />
              <div class="butt-search">
                <!-- PULSANTE MAIL -->
                <a
                  type="button"
                  class="mail-button text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  <div
                    class="container-contact d-flex justify-content-center flex-column"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-envelope"
                      beat
                      style="color: #cc1136"
                    />
                    <div class="m-0 contact-mail">Contatta l'alloggio</div>
                  </div>
                </a>
                <!-- <message-button v-if="apartment" :apartment="this.apartment">
                  <font-awesome-icon icon="fa-regular fa-envelope" class="logo-search" />
                </message-button> -->
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-lg-4">
          <div
            class="col-12 justify-content-center col-lg-2 d-flex align-items-center justify-content-lg-end mt-2"
          >
            <p class="ms-3 mb-1 text"><strong>Servizi Disponili:</strong></p>
          </div>

          <div
            class="row gap-3 justify-content-center justify-content-lg-start col-lg-10"
          >
            <div
              class="col-2 col-lg-1 p-0"
              v-for="service in apartment.services"
            >
              <div
                class="card h-100 border-0 bg-transparent d-flex direction-column justify-content-between align-items-center"
              >
                <div class="service-name text-white text-center">
                  {{ service.name }}
                </div>

                <div class="service-icon">
                  <img :src="service.icon" alt="" style="width: 50px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row flex-column">
          <div class="col-12 d-flex mt-4 text-center">
            <h5>{{ apartment.description }}</h5>
          </div>
        </div>
        <!-- maps -->
        <div class="row justify-content-center my-3">
          <div v-if="apartment.lon && apartment.lat" class="col-12">
            <div
              id="map"
              style="width: 100%; height: 200px"
              class="rounded-4"
            ></div>
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
  </div>
  <!-- Modale Messaggio -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Scrivi a
            <strong style="color: #fab005">{{ this.apartment.title }}</strong>
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="filter: invert(100%)"
          ></button>
        </div>
        <div class="modal-body">
          <form id="messageform" method="post" @submit.prevent="createMessage">
            <div class="mb-3">
              <label for="email" class="col-form-label">E-Mail:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                ref="email"
                autocomplete="email"
                v-model="email"
                required
              />
              <span v-if="!isEmailValid" style="color: #cc1136"
                >Inserisci mail</span
              >
            </div>
            <div class="mb-3">
              <label for="content" class="col-form-label">Messaggio:</label>
              <textarea
                class="form-control"
                id="content"
                rows="5"
                ref="content"
                v-model="content"
                required
              ></textarea>
              <span v-if="!isContentValid" style="color: #cc1136"
                >Il contenuto deve essere di almeno 10 caratteri.</span
              >
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Chiudi
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                style="background-color: #fab005; color: black"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

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
      top: 3%;
      right: 3.8%;
    }
  }

  .mail-button {
    font-size: 70px;

    .container-contact {
      border-radius: 20px;
      padding: 15px;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }

    .contact-mail {
      color: white;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .swal2-popup .swal2-html-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swal2-popup .swal2-html-container img {
    width: 100px;
    height: 100px;
  }
}
</style>
