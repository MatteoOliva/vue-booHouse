<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: "MAIN"
        };
    }
}

</script>

<template>


    <div class="container-main">

        <div class="blood-button">
            Cerca
        </div>


    </div>

</template>

<style lang="scss" scoped>
.container-main {
    height: calc(100vh - 170px);
    flex-grow: 1;
    background-color: gray;
    background-image: url(/src/img/background-home.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
}

.blood-button {
    text-align: center;
    display: inline-block;
    width: 120px;
    /* Larghezza del pulsante */
    height: 200px;
    /* Altezza del pulsante */
    background-color: red;
    background-image: radial-gradient(circle at 50% 30%, white, transparent 25%), linear-gradient(to bottom, #bb0000, #880000);
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);


}



.blood-button:hover {
    background-image: radial-gradient(circle at 50% 40%, white, transparent 30%), linear-gradient(to bottom, #cc0000, #aa0000);
}






;
</style>
