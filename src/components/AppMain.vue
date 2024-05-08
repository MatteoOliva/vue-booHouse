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
        <h1 class="m-0">{{ title }}</h1>

    </div>


</template>

<style lang="scss" scoped>
.container-main {
    height: calc(100vh - 200px);
    flex-grow: 1;
    background-color: gray;
}

;
</style>
