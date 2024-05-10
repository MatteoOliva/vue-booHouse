<script>
import axios from "axios";
import { store, api } from "../../store";

export default {
  props: { apartment: Object },

  data() {
    return {

    };
  },

  components: {  },
};

</script>

<template>
    <div class="container">
        <h1>{{ apartment.title }}</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>