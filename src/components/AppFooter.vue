<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: "Team 5 ~ BOO HOUSE"
        };
    }
}

</script>

<template>

    <div class="container-footer">
        <h5 class="m-0"><font-awesome-icon icon="fa-solid fa-skull" /> <font-awesome-icon icon="fa-solid fa-skull" /> {{
            title }} <font-awesome-icon icon="fa-solid fa-skull" /> <font-awesome-icon icon="fa-solid fa-skull" /></h5>
    </div>


</template>

<style lang="scss" scoped>
.container-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #0A0F15;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>