<script>
import axios from "axios";
import { store, api } from "../store";

import CarouselApartments from "./search_components/CarouselApartments.vue";

export default {
    data() {
        return {
            title: "MAIN",
            store,
            api,
        };
    },

    components: { CarouselApartments },

    methods: {},
};
</script>

<template>
    <div class="container-main ">
        <!-- CAROSELLO -->
        <div class="row justify-content-center">
            <div class="col-6  carosello">
                <carousel-apartments class=""></carousel-apartments>
            </div>
        </div>
        <!-- <router-link :to="{ name: 'search' }" @click="store.fetchApartments()"> -->
        <!-- <div class="blood-button"> -->
        <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="logo-search" /> -->
        <!-- </div> -->
        <!-- </router-link> -->


        <div class="slogan-main">
            Dove il brivido incontra il comfort. Prenota la tua fuga da favola... con
            un tocco di mistero!
        </div>



        <div class="slogan-search" @click="scrollToSearch()">
            <font-awesome-icon icon="fa-solid fa-down-long" bounce /> <font-awesome-icon icon="fa-solid fa-down-long"
                bounce />
            Trova
            il tuo alloggio da Paura! <font-awesome-icon icon="fa-solid fa-down-long" bounce /> <font-awesome-icon
                icon="fa-solid fa-down-long" bounce />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-main {
    height: calc(100vh - 170px);
    background-image: url(/src/img/background-home.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: auto;
    scrollbar-width: none;


    .slogan-main {
        width: 90%;
        background-color: rgba($color: #000000, $alpha: 0.48);
        padding: 10px;
        padding-left: 70px;
        padding-right: 70px;
        border-radius: 25px;
        color: white;
        font-size: 40px;
        text-align: center;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;



        position: absolute;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);

    }

    .carosello {
        position: absolute;
        bottom: 28%;
        left: 50%;
        transform: translateX(-50%);
    }

    .slogan-search {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        color: #fab005;
        text-align: center;
        margin: 0, auto;
        font-size: 2.5rem;
        font-weight: bold;
    }

}
</style>
