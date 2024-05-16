<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <div class="container-header">
    <div class="header d-flex align-items-center">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link :to="{ name: 'home' }" class="logo-left d-flex align-items-center gap-4">
          <img src="/src/img/head-logo.png" alt="" class="logo-big" />
          <img src="/src/img/head-logo-mini.png" alt="" class="logo-small" />
        </router-link>

        <div class="header-right">
          <ul class="d-flex gap-4 mb-0">
            <li>
              <a href="http://127.0.0.1:8000/login" class="fs-4"><span class="reserved-area ">Area
                  riservata</span>
                <span class="box-area">
                  <font-awesome-icon class="ms-2" icon="fa-solid fa-user" />
                </span>
              </a>
            </li>
            <!-- <li><a href="http://127.0.0.1:8000/register">Registrati</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-header {
  height: 100px;
  background-color: #0a0f15;

  .logo-left {
    height: 100px;

    img {
      max-height: 70%;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }

  .header-right {
    ul li {
      list-style: none;
      color: white;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}


@media screen and (max-width: 3000px) {
  .logo-small {
    display: none;
  }
}



@media screen and (max-width: 768px) {
  .logo-big {
    display: none;
  }

  .logo-small {
    display: block;
  }
}




@media screen and (max-width: 576px) {
  .logo-small {
    margin-left: 30%;
  }

  .reserved-area {
    display: none;
  }

  .box-area {
    font-size: 40px;
    margin-right: 30px;
  }
}
</style>
