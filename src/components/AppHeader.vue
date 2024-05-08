<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: "HEADER"
        };
    }
}

</script>

<template>
    <nav class="navbar header">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ title }}</a>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100px;
    background-color: red;

}
</style>
