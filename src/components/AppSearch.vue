<script>
import axios from "axios";

import { store, api } from "../store";
import CardApartment from "./search_components/CardApartment.vue";

export default {
  data() {
    return {
      store,
      api,
      title: "SEARCH PAGE",
      apartmentsTerms: "",
      clickResult: "",
      services: [],
      activeFilters: false,
      query: {
        lat: "",
        lon: "",
        address: "",
        rooms: "",
        beds: "",
        toilets: "",
        mq: "",
        services: [],
        radius: 20,
      },
    };
  },

  components: { CardApartment },

  methods: {
    fetchApartments() {
      if (this.apartmentsTerms.trim()) {
        store.fetchApartments(this.apartmentsTerms);
      }
    },

    handleSearch() {
      if (this.apartmentsTerms === "") {
        store.fetchAllApartments();
      } else {
        this.fetchApartments(this.apartmentsTerms);
      }
    },

    fetchLatLon() {
      axios
        .get(
          "https://api.tomtom.com/search/2/geocode/" +
          this.apartmentsTerms +
          ".json?key=8TVYgA3vbL771Lx9e0MWAxKazyXxbjdn"
        )
        .then((response) => {
          console.log(response.data.results[0].position.lat);
        });
    },

    fetchAutocomplete() {
      if (this.apartmentsTerms.length > 3) {
        const apiKey = "8TVYgA3vbL771Lx9e0MWAxKazyXxbjdn";
        const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(
          this.apartmentsTerms
        )}.json?countrySet=IT&language=it-IT&key=${apiKey}`;

        axios.get(url).then((response) => {
          const results = response.data.results;
          const container = document.getElementById("autocomplete-results");
          container.innerHTML = ""; // Pulisce i vecchi risultati

          results.forEach((result) => {
            const div = document.createElement("a");
            div.innerHTML = result.address.freeformAddress;
            div.classList.add("list-group-item", "list-group-item-action");
            div.onclick = () => {
              this.query.address = result.address.freeformAddress;
              this.query.lat = result.position.lat;
              this.query.lon = result.position.lon;
              this.apartmentsTerms = result.address.freeformAddress;
              //   console.log(this.query.lat, this.query.lon, this.query.address);
              container.innerHTML = ""; // Nasconde i risultati dopo la selezione
              this.fetchFilterApartments();
              const filterButton = document.getElementById("btn-filter");
              const emptySearchBtn =
                document.getElementById("btn-empty-search");
              filterButton.classList.remove("d-none");
              emptySearchBtn.classList.remove("d-none");

              const filterMobileButton =
                document.getElementById("btn-filter-mobile");
              const emptySearchMobileBtn = document.getElementById(
                "btn-empty-search-mobile"
              );
              filterMobileButton.classList.remove("d-none");
              emptySearchMobileBtn.classList.remove("d-none");
            };
            container.appendChild(div);
          });
        });
      }
    },

    fetchFilterApartments() {
      // const search_term = this.query.address;
      // const lat = this.query.lat;
      // const lon = this.query.lon;
      // const radius = this.query.radius;
      store.isVisible = true;
      let params = { ...this.query };
      params.services = JSON.stringify(params.services);
      //   console.log(params);
      params = new URLSearchParams(params).toString();

      // console.log(lat, lon, radius, search_term);
      axios
        .post(`http://127.0.0.1:8000/api/apartments/search/all?${params}`)
        .then((response) => {
          store.apartments = response.data;
          console.log(response.data);
          store.isVisible = false;
        });
    },

    showFilters() {
      this.activeFilters = true;
    },

    validateRadius() {
      if (this.query.radius < 1) {
        this.query.radius = 1;
      } else if (this.query.radius > 20) {
        this.query.radius = 20;
      }
      //   console.log(this.query.radius);
    },

    fetchServices() {
      axios.get(`http://127.0.0.1:8000/api/services/`).then((response) => {
        this.services = response.data.results;
        // console.log(this.services);
      });
    },
    scrollToSearch() {
      const searchBar = document.getElementById("address");

      searchBar.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },

    emptySearch() {
      this.apartmentsTerms = "";
      this.query.lat = "";
      this.query.lon = "";
      this.query.address = "";
      this.query.rooms = "";
      this.query.beds = "";
      this.query.toilets = "";
      this.query.mq = "";
      this.query.services = [];
      this.query.radius = 20;

      store.fetchAllApartments();

      const filterButton = document.getElementById("btn-filter");
      const emptySearchBtn = document.getElementById("btn-empty-search");
      filterButton.classList.add("d-none");
      emptySearchBtn.classList.add("d-none");

      const filterMobilButton = document.getElementById("btn-filter-mobile");
      const emptyMobileSearchBtn = document.getElementById(
        "btn-empty-search-mobile"
      );
      filterMobilButton.classList.add("d-none");
      emptyMobileSearchBtn.classList.add("d-none");

      this.activeFilters = false;
    },
  },

  mounted() {
    store.fetchAllApartments();
    this.fetchServices();

    console.log("activefilters " + this.activeFilters);
  },
};
</script>

<template>
  <div class="container-main">
    <div class="container">
      <div class="my-4 mx-2 d-flex align-items-center box-search mb-3 mb-md-0 flex-wrap">
        <span class="text-start flex-grow-1">
          <input @keyup="fetchAutocomplete()" @click="scrollToSearch()" v-model="apartmentsTerms" id="address"
            type="search" placeholder="Cerca alloggio..." required autocomplete="off" class="w-100 input-bar" /></span>

        <div class="d-none d-md-flex justify-content-between">
          <span class="advanced-search"><button id="btn-filter" style="color: black; background-color: #fab005"
              type="button" class="btn d-none ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Ricerca Avanzata
            </button></span>

          <span><button @click="emptySearch()" id="btn-empty-search" style="color: white; background-color: #cc1136"
              type="button" class="btn d-none ms-3">
              Azzera ricerca
            </button></span>
        </div>

        <!-- <button class="btn btn-primary mx-3" @click="fetchFilterApartments()">
          Invia
        </button> -->

        <div class="col-12 d-flex d-md-none justify-content-between mt-2 px-0 box-search-mobile">
          <span class="advanced-search"><button id="btn-filter-mobile" style="color: black; background-color: #fab005"
              type="button" class="btn d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Ricerca Avanzata
            </button></span>

          <span><button @click="emptySearch()" id="btn-empty-search-mobile"
              style="color: white; background-color: #cc1136" type="button" class="btn d-none">
              Azzera ricerca
            </button></span>
        </div>

        <!-- badges per i filtri della ricerca avanzata -->
        <div class="filters d-flex justify-content-center mt-3 col-12 flex-wrap">
          <span v-if="
            query.radius != 20 ||
            query.rooms ||
            query.toilets ||
            query.beds ||
            query.mq ||
            query.services.length > 0
          " class="badge rounded-pill text-dark me-2 mb-2"></span>
          <span v-if="query.radius != 20" class="badge rounded-pill text-bg-warning me-2 mb-2">
            Raggio: {{ query.radius }}km
            <span @click="
              query.radius = 20;
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>
          <span v-if="query.rooms" class="badge rounded-pill text-bg-warning me-2 mb-2">
            {{ query.rooms }} Stanze
            <span @click="
              query.rooms = '';
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>
          <span v-if="query.toilets" class="badge rounded-pill text-bg-warning me-2 mb-2">
            {{ query.toilets }} Bagni
            <span @click="
              query.toilets = '';
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>
          <span v-if="query.beds" class="badge rounded-pill text-bg-warning me-2 mb-2">{{ query.beds }} Letti
            <span @click="
              query.beds = '';
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>
          <span v-if="query.mq" class="badge rounded-pill text-bg-warning me-2 mb-2">{{ query.mq }} Metri Quadri
            <span @click="
              query.mq = '';
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>

          <!-- badges servizi aggiuntivi -->
          <span v-for="service in services" v-show="query.services.includes(service.id)"
            class="badge rounded-pill text-bg-warning me-2 mb-2">{{ service.name }}
            <span @click="
              query.services = query.services.filter(function (id) {
                return id != service.id;
              });
            fetchFilterApartments();
            " class="border-start border-secondary ps-1 close-badge-x">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </span>
          </span>
        </div>
      </div>

      <div id="autocomplete-results" class="list-group position-absolute z-1"></div>
      <!-- </form> -->

      <div class="container">
        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 card-home-container" type="button">
          <card-apartment v-for="apartment in store.apartments" :apartment="apartment">
          </card-apartment>
        </div>
      </div>
    </div>
  </div>

  <!-- MODALE -->
  <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Ricerca Avanzata
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            style="filter: invert(100%)"></button>
        </div>

        <!-- modal body -->
        <div class="modal-body bg-dark text-light">
          <div class="container">
            <div class="row justify-content-center mt-3">
              <!-- RADIUS -->
              <div class="col-12 col-md-6 col-xl-2">
                <p class="m-0">Raggio di Ricerca</p>
                <input type="number" class="form-control" placeholder="Inserisci radius" v-model.number="query.radius"
                  @input="validateRadius" min="1" max="20" aria-describedby="addon-wrapping" required />
              </div>

              <!-- ROOMS -->
              <div class="col-12 col-md-6 col-xl-2">
                <p class="m-0">Numero Stanze</p>
                <input type="number" class="form-control" placeholder="N° Stanze" v-model.number="query.rooms"
                  aria-describedby="addon-wrapping" min="0" required />
              </div>

              <!-- BAGNI -->
              <div class="col-12 col-md-6 col-xl-2">
                <p class="m-0">Numero Bagni</p>
                <input type="number" class="form-control" placeholder="N° Bagni" v-model.number="query.toilets"
                  aria-describedby="addon-wrapping" min="0" required />
              </div>

              <!-- LETTI -->
              <div class="col-12 col-md-6 col-xl-2">
                <p class="m-0">Numero Letti</p>
                <input type="number" class="form-control" placeholder="N° Letti" v-model.number="query.beds"
                  aria-describedby="addon-wrapping" min="0" required />
              </div>

              <!-- MQ -->
              <div class="col-12 col-md-6 col-xl-2">
                <p class="m-0">Metri Quadri</p>
                <input type="number" class="form-control" placeholder="Mq" v-model.number="query.mq"
                  aria-describedby="addon-wrapping" min="0" required />
              </div>
              <div class="col-10 mt-4 mb-2">
                <p class="m-0 mb-1"><strong>Servizi:</strong></p>
              </div>

              <!-- SERVIZI -->
              <div class="col-12 mb-3">
                <div class="row align-items-center">
                  <div v-for="service in services" :key="service.id"
                    class="service-item col-12 col-sm-6 col-md-6 col-lg-4">
                    <div class="">
                      <input type="checkbox" :id="'service-' + service.id" v-model="query.services" :value="service.id"
                        class="form-check-input ms-2" />
                      <label :for="'service-' + service.id" class="ms-5 services-details">
                        <img :src="service.icon" :alt="service.name" class="service-icon" style="width: 26px" />
                        {{ service.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Chiudi
          </button>

          <button class="btn btn-primary mx-3" @click="
            fetchFilterApartments();
          showFilters();
          " data-bs-dismiss="modal" style="color: black; background-color: #fab005">
            Ricerca
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-main {
  height: calc(100vh - 170px);
  flex-grow: 1;
  background-color: gray;
  background-image: url(/src/img/background-search.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: auto;
  scrollbar-width: none;

  .box-search-mobile {
    position: sticky;
    top: 70px;
    z-index: 1;
  }

  .services-details {
    img {
      width: 25px;
    }
  }
}

.close-badge-x {
  cursor: pointer;
}

#autocomplete-results {
  margin-left: 10px;
}

.card-home-container {
  margin-top: 20px;
}

.input-bar {
  border-radius: 7px;
  height: 37px;
  border: 1px solid grey;
  padding: 10px;

  &:focus {
    outline-width: 0;
  }
}

.box-search {
  position: sticky;
  top: 20px;
  z-index: 1;
  margin-top: 20px;
}

#exampleModal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// @keyframes pulse {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.1);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// .pulse {
//   animation: pulse 4s infinite;
// }</style>
