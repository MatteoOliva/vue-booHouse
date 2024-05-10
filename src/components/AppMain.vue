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
        <!-- <router-link :to="{ name: 'search' }" @click="store.fetchApartments()">
            <div class="blood-button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="logo-search" />
            </div>
        </router-link> -->
        <router-link :to="{ name: 'details' }" @click="store.fetchApartments()">
            <div class="blood-button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="logo-search" />
            </div>
        </router-link>

        <div class="slogan-main">
            Dove il brivido incontra il comfort. Prenota la tua fuga da favola... con
            un tocco di mistero!
            <br />
            Trova il tuo alloggio da Paura!
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
    overflow: hidden;


    .slogan-main {
        color: white;
        font-size: 24px;
        text-align: center;
        font-weight: bold;

        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        text-shadow: -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000,
            1.5px 1.5px 0 #000;
    }

    .carosello {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%);
    }

}

.blood-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 24'%3E%3Cpath fill='%23000' d='M14.647 13.663a1.923 1.923 0 0 0-.104-.239l.005.011c-.146-.341-1.32-2.609-1.516-2.918L7.581-.001l-5.59 10.776c-.19.31-1.232 2.32-1.376 2.66l-.057.126A7.456 7.456 0 0 0 0 16.417a7.582 7.582 0 1 0 15.164 0v-.006l.001-.101c0-.955-.19-1.866-.535-2.696l.017.047zm-7.062 8.355a5.585 5.585 0 0 1-4.899-8.269l-.015.029a6.382 6.382 0 0 0-.11 1.181v.001a6.7 6.7 0 0 0 6.696 6.696c.113 0 .234 0 .346-.006a5.53 5.53 0 0 1-2.003.368h-.023h.001z'/%3E%3C/svg%3E");
    background: linear-gradient(225deg, #ff0000 0%, #620000 100%);
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    position: relative;

    position: absolute;
    bottom: 40px;
    left: 45%;

    .logo-search {
        color: white;
        font-size: 60px;
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-40%);
    }
}

.blood-button:hover {
    transform: scale(1.3);
}
</style>
