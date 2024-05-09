<script>
import AppMain from "../components/AppMain.vue";
import { store, api } from "../store";
import CardApartment from "../components/search_components/CardApartment.vue";

export default {

    data() {
        return {
            store,
            api,
            title: "SEARCH PAGE",
            apartmentsTerms: ''
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
            if (this.apartmentsTerms === '') {
                store.fecthAllApartments();
            } else {
                this.fetchApartments(this.apartmentsTerms);
            }
        }
    },


    mounted() {
        store.fecthAllApartments();
    },


};
</script>

<template>
    <div class="container-main">

        <div class="container text-center">

            <form onsubmit="event.preventDefault();" role="search" class="my-5">
                <label for="search" class="text-center">Search for stuff</label>
                <input @keyup="handleSearch()" v-model="apartmentsTerms" id="search" type="search"
                    placeholder="Cerca appartamento..." autofocus required />
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
        --rad: .7rem;
        --dur: .3s;
        --color-dark: #2f2f2f;
        --color-light: #fff;
        --color-brand: #57bd84;
        --font-fam: 'Lato', sans-serif;
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
        min-height: 100vh
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
