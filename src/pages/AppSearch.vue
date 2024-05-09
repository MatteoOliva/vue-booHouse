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
            radius: "",
            resultAddres: [],
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
            //   console.log("ciao");
            if (this.apartmentsTerms.length > 3) {
                const apiKey = "8TVYgA3vbL771Lx9e0MWAxKazyXxbjdn";
                const url =
                    "https://api.tomtom.com/search/2/geocode/" +
                    this.apartmentsTerms +
                    ".json?countrySet=IT&language=it-IT&key=" +
                    apiKey;
                // console.log(url);
                // console.log(apiKey)
                axios.get(url).then((response) => {
                    const results = response.data.results;
                    //   console.log(results);
                    const container = document.getElementById("autocomplete-results");
                    // Pulisce i vecchi risultati
                    container.innerHTML = "";

                    if (results.length > 0) {
                        results.forEach((result) => {
                            const div = document.createElement("a");
                            const resultAddres = {
                                address: result.address.freeformAddress,
                                lat: result.position.lat,
                                lon: result.position.lon,
                            };

                            this.resultAddres.push(resultAddres);

                            div.innerHTML = result.address.freeformAddress;

                            // Classi di Bootstrap per gli elementi della lista
                            div.classList.add("list-group-item", "list-group-item-action");
                            div.onclick = function () {
                                document.getElementById("address").value =
                                    result.address.freeformAddress;

                                // Nasconde i risultati dopo la selezione
                                container.innerHTML = "";
                            };
                            container.appendChild(div);
                        });
                    }
                });
            }
        },
    },

    mounted() {
        store.fetchAllApartments();
    },
    // v-if="apartmentsTerms == '' ? store.fetchApartmentsSponsor() : fetchApartments(apartmentsTerms)"
};
</script>

<template>
    <div class="container-main">
        <div class="container text-center">
            <form onsubmit="event.preventDefault();" role="search" class="my-5">
                <label for="search" class="text-center">Search for stuff</label>
                <input @keyup="fetchAutocomplete()" v-model="apartmentsTerms" id="address" type="search"
                    placeholder="Cerca appartamento..." autofocus required autocomplete="off" />
                <div id="autocomplete-results" class="list-group position-absolute z-1"></div>
            </form>
        </div>

        <div class="container">
            <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3" type="button">
                <card-apartment v-for="apartment in store.apartments" :apartment="apartment">
                </card-apartment>
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

    //Vars
    :root {
        --rad: 0.7rem;
        --dur: 0.3s;
        --color-dark: #2f2f2f;
        --color-light: #fff;
        --color-brand: #57bd84;
        --font-fam: "Lato", sans-serif;
        --height: 5rem;
        --btn-width: 6rem;
        --bez: cubic-bezier(0, 0, 0.43, 1.49);
    }

    // Setup
    body {
        background: var(--color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    html {
        box-sizing: border-box;
        height: 100%;
        font-size: 10px;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    // Main styles
    form {
        position: relative;
        width: 30rem;
        background: var(--color-brand);
        border-radius: var(--rad);
    }

    input,
    button {
        height: var(--height);
        font-family: var(--font-fam);
        border: 0;
        color: var(--color-dark);
        font-size: 1.8rem;
    }

    input[type="search"] {
        outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
        width: 100%;
        background: var(--color-light);
        padding: 0 1.6rem;
        border-radius: var(--rad);
        appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
        transition: all var(--dur) var(--bez);
        transition-property: width, border-radius;
        z-index: 1;
        position: relative;
    }

    button {
        display: none; // prevent being able to tab to it
        position: absolute;
        top: 0;
        right: 0;
        width: var(--btn-width);
        font-weight: bold;
        background: var(--color-brand);
        border-radius: 0 var(--rad) var(--rad) 0;
    }

    input:not(:placeholder-shown) {
        border-radius: var(--rad) 0 0 var(--rad);
        width: calc(100% - var(--btn-width));

        +button {
            display: block;
        }
    }

    label {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
    }
}
</style>
