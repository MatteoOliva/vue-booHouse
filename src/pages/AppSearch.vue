<script>
import AppMain from '../components/AppMain.vue';

export default {
    data() {
        return {
            title: "SEARCH PAGE",

        };
    },

    components: { AppMain },

};

</script>

<template>


    <div class="container-main">


        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <form action="">
            <input type="search" required>
            <i class="fa fa-search"></i>
            <a href="javascript:void(0)" id="clear-btn">Clear</a>
        </form>




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

    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100%;
        background: #07051a;
    }

    form {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 1s;
        width: 50px;
        height: 50px;
        background: white;
        box-sizing: border-box;
        border-radius: 25px;
        border: 4px solid white;
        padding: 5px;
    }

    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        ;
        height: 42.5px;
        line-height: 30px;
        outline: 0;
        border: 0;
        display: none;
        font-size: 1em;
        border-radius: 20px;
        padding: 0 20px;
    }

    .fa {
        box-sizing: border-box;
        padding: 10px;
        width: 42.5px;
        height: 42.5px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        color: #07051a;
        text-align: center;
        font-size: 1.2em;
        transition: all 1s;
    }

    form:hover,
    form:valid {
        width: 200px;
        cursor: pointer;
    }

    form:hover input,
    form:valid input {
        display: block;
    }

    form:hover .fa,
    form:valid .fa {
        background: #07051a;
        color: white;
    }


    a {
        display: none;
        position: absolute;
        top: 70px;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 20px;
        color: white;
        text-align: center;
        width: 100%;
    }

    form:valid a {
        display: block;
    }
}
</style>