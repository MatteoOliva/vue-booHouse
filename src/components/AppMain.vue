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
}

;
</style>
