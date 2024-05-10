<script>
import AppMain from "../components/AppMain.vue";
import axios from "axios";

import { store, api } from "../store";
import CardApartment from "../components/search_components/CardApartment.vue";

export default {
    data() {
        return {
            store,
            api,
            title: "SEARCH PAGE",
            apartmentsTerms: "",
            lat: "",
            lon: "",
            address: '',
            radius: "",
            clickResult: '',
            radius: 20,
        };
    },

    components: { AppMain, CardApartment },

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
                const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(this.apartmentsTerms)}.json?countrySet=IT&language=it-IT&key=${apiKey}`;

                axios.get(url).then((response) => {
                    const results = response.data.results;
                    const container = document.getElementById("autocomplete-results");
                    container.innerHTML = ""; // Pulisce i vecchi risultati

                    results.forEach((result) => {
                        const div = document.createElement("a");
                        div.innerHTML = result.address.freeformAddress;
                        div.classList.add("list-group-item", "list-group-item-action");
                        div.onclick = () => {
                            this.address = result.address.freeformAddress;
                            this.lat = result.position.lat;
                            this.lon = result.position.lon;
                            this.apartmentsTerms = result.address.freeformAddress;
                            console.log(this.lat, this.lon, this.address);
                            container.innerHTML = ""; // Nasconde i risultati dopo la selezione
                        };
                        container.appendChild(div);
                    });
                });
            }
        },

        fetchFilterApartments() {
            const lat = this.lat;
            const lon = this.lon;
            const radius = this.radius;
            const search_term = this.address;
            console.log(lat, lon, radius, search_term);
            axios.get(`http://127.0.0.1:8000/api/apartments/search/ordered/${search_term}/${lat}/${lon}/${radius}`).then((response) => {

                store.apartments = response.data;
                console.log(response.data);
            });
        },

        validateRadius() {
            if (this.radius < 1) {
                this.radius = 1;
            } else if (this.radius > 20) {
                this.radius = 20;
            }
            console.log(this.radius);
        },

    },



    mounted() {
        store.fetchAllApartments();
    },
};
</script>

<template>
    <div class="container-main">

        <div class="container">

            <div class="my-4 text-center">

                <input @keyup="fetchAutocomplete()" v-model="apartmentsTerms" id="address" type="search"
                    placeholder="Cerca appartamento..." required autocomplete="off" class="w-50" />

                <button class="btn btn-primary mx-3" @click="fetchFilterApartments()">Invia</button>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ricerca Avanzata
                </button>
            </div>

            <!-- MODALE -->
            <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Ricerca Avanzata</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!-- modal body -->
                        <div class="modal-body">
                            <div class="input-group d-flex gap-3 align-items-center">





                                <!-- RADIUS -->
                                <div>
                                    <p class="m-0">Raggio di Ricerca</p>
                                    <input type="number" class="form-control" placeholder="Inserisci radius"
                                        v-model.number="radius" @input="validateRadius" min="1" max="20"
                                        aria-describedby="addon-wrapping" required>
                                </div>

                                <!-- ROOMS -->
                                <div>
                                    <p class="m-0">Numero Stanze</p>
                                    <input type="number" class="form-control" placeholder="N° Stanze"
                                        aria-describedby="addon-wrapping" min="0" required>
                                </div>



                                <!-- BAGNI -->
                                <div>
                                    <p class="m-0">Numero Bagni</p>
                                    <input type="number" class="form-control" placeholder="N° Bagni"
                                        aria-describedby="addon-wrapping" min="0" required>
                                </div>

                                <!-- LETTI -->
                                <div>
                                    <p class="m-0">Numero Letti</p>
                                    <input type="number" class="form-control" placeholder="N° Letti"
                                        aria-describedby="addon-wrapping" min="0" required>
                                </div>

                                <!-- MQ -->
                                <div>
                                    <p class="m-0">Metri Quadri</p>
                                    <input type="number" class="form-control" placeholder="Mq"
                                        aria-describedby="addon-wrapping" min="0" required>
                                </div>

                                <!-- SERVIZI -->
                                <div>
                                    <p class="m-0">Servizi Aggiuntivi</p>
                                    <input type="number" class="form-control" aria-describedby="addon-wrapping"
                                        required>
                                </div>


                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                            <button class="btn btn-primary mx-3" @click="fetchFilterApartments()"
                                data-bs-dismiss="modal">Ricerca</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="autocomplete-results" class="list-group position-absolute z-1"></div>
            <!-- </form> -->


            <div class="container">
                <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3" type="button">
                    <card-apartment v-for="apartment in store.apartments" :apartment="apartment">
                    </card-apartment>
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
}
</style>
