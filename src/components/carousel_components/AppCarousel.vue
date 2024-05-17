<script>
import { store } from "../../store";
import CardApartment from "../search_components/CardApartment.vue";

export default {
  data() {
    return {
      store,
      currentIndex: 0,
      autoPlay: "",
    };
  },

  components: { CardApartment },

  methods: {
    //
    // Clona gli elementi all'inizio e alla fine del carosello
    cloneElements() {
      const cardContainer = document.getElementById("card-container");
      const firstCard = cardContainer.firstElementChild.cloneNode(true);
      const lastCard = cardContainer.lastElementChild.cloneNode(true);
      //   cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
      cardContainer.appendChild(firstCard);
    },

    // Imposta la posizione iniziale del carosello
    adjustInitialPosition() {
      const cardContainer = document.getElementById("card-container");
      const cardCount = store.sponsoredApartments.length;
      const firstCard = document.querySelector(".carousel-card");
      let cardWidth = firstCard.getBoundingClientRect().width;

      // Imposta la posizione iniziale per mostrare il secondo set di elementi clonati
      const initialPosition = -cardWidth * (this.currentIndex + 1);
      cardContainer.style.left = `${initialPosition}px`;
    },

    // Scroll verso sinistra
    scrollLeft() {
      if (store.sponsoredApartments.length > 0) {
        const cardContainer = document.getElementById("card-container");
        const cardCount = store.sponsoredApartments.length;
        const firstCard = document.querySelector(".carousel-card");
        let cardWidth = firstCard.getBoundingClientRect().width;

        // Calcola la nuova posizione
        this.currentIndex = (this.currentIndex + 1) % cardCount;
        const newPosition = -cardWidth * (this.currentIndex + 1);

        // Applica la transizione
        cardContainer.style.transition = "left 0.5s ease-in-out";
        cardContainer.style.left = `${newPosition}px`;

        // Rimuovi la transizione dopo il completamento per garantire un ciclo continuo
        setTimeout(() => {
          cardContainer.style.transition = "none";
          // Se l'indice corrente è l'ultimo elemento clonato, riportalo al primo elemento clonato
          if (this.currentIndex === cardCount) {
            this.currentIndex = 0;
            cardContainer.style.left = `${-cardWidth}px`;
          }
        }, 500);
      }
    },
    startAutoPlay() {
      console.log("avviato autoplay");
      this.autoPlay = setInterval(() => {
        this.cloneElements(); // Clona gli elementi prima di avviare l'autoplay
        this.scrollLeft();
      }, 1000 * 2);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlay);
      console.log("stoppato autoplay");
    },
  },

  created() {
    store.fetchApartmentsSponsor();
  },

  mounted() {
    this.$nextTick(() => {
      this.startAutoPlay();
      this.cloneElements();
      this.adjustInitialPosition();
    });
  },
};
</script>

<template>
  <div class="carousel-wrapper">
    <!-- titolo alloggi in evidenza -->
    <div class="text-center title-ev">
      <div class="evidenza-alloggi">
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
        Alloggi Infestati in evidenza...
        <font-awesome-icon icon="fa-solid fa-skull-crossbones" />
      </div>
    </div>

    <div
      @mouseenter="stopAutoPlay()"
      @mouseleave="startAutoPlay()"
      class="carousel-container container position-relative"
    >
      <div class="row flex-nowrap" id="card-container">
        <card-apartment
          v-for="apartment in store.sponsoredApartments"
          :apartment="apartment"
          :key="apartment.id"
          :id="'card-' + apartment.id"
          class="carousel-card col-2"
        ></card-apartment>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

#card-container {
  width: 100vw;
  position: absolute;
  transition: left 0.2s;
}

.title-ev {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3px 10px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
  z-index: 1;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 992px) {
  .evidenza-alloggi {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .evidenza-alloggi {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .evidenza-alloggi {
    font-size: 12px;
  }
}
</style>
