<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {

        };
    },

    methods: {


    }
}





</script>

<template>

    <div class="container-header">

        <div class="header d-flex  align-items-center">

            <div class="container d-flex justify-content-between align-items-center">
                <router-link :to="{ name: 'home' }" class="logo-left d-flex align-items-center gap-4">
                    <img src="/src/img/head-logo.png" alt="">

                </router-link>

                <div class="header-right">

                    <ul class="d-flex gap-4 ">
                        <li><a href="http://127.0.0.1:8000/login">Login <font-awesome-icon
                                    icon="fa-solid fa-user" /></a></li>
                        <li><a href="http://127.0.0.1:8000/register">Registrati</a></li>
                    </ul>

                </div>
            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>
.container-header {

    height: 100px;
    background-color: #0A0F15;

    .logo-left {
        height: 100px;

        img {
            max-height: 70%;

        }

        a {
            text-decoration: none;
            color: white
        }
    }

    .header-right {

        ul li {
            list-style: none;
            color: white;

            a {
                text-decoration: none;
                color: white
            }

        }
    }

}
</style>
