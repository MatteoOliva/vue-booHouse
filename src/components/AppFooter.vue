<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: "FOOTER"
        };
    }
}

</script>

<template>

    <div class="container-footer">
        <div class="m-0">{{ title }}</div>
    </div>


</template>

<style lang="scss" scoped>
.container-footer {
    height: 100px;
    background-color: maroon;
}
</style>