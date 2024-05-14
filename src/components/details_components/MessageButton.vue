<script>
// importo axios
import axios from "axios";
// importo store
import { store, api } from "../../store";

import Swal from "sweetalert2";

export default {
  data() {
    return {
      store,
      api,
      email: "",
      content: "",
    };
  },

  props: {
    apartment: Object,
  },

  methods: {
    createMessage() {
      if (this.isEmailValid && this.isContentValid) {
        // Form is valid, submit data (e.g., send to server)
        console.log("email inviata con successo");
        // Reset form after successful submission (optional)
        // this.email = "";
        // this.content = "";
      } else {
        // Form is invalid, prevent submission
        console.log("Correggi la email prima di inviarla");
      }

      // salvo dati del form
      let formData = {
        apartment_id: this.apartment.id,
        email: document.getElementById("email").value,
        content: document.getElementById("content").value,
      };

      axios.post(api.basicsUrl + "/message", formData).then((response) => {
        this.isSending = false;
        console.log(response);

        // se la risposta dal db è positiva
        if (response.data.response) {
          Swal.fire({
            position: "center",
            width: 600,
            icon: "success",
            title: "Il messaggio è stato inviato alla struttura",
            showConfirmButton: false,


            backdrop: ` 
    rgba(0,0,0,0.4)
    url("/skull-gif.gif")
    left center
    no-repeat`
          });


          setTimeout(() => {
            window.location.reload();
          }, 4000);
        }
        // this.resetForm();
      });
    },

    // ricarico la pagina
    // reloadPage() {
    //   window.location.reload();
    // },
    // resetto il form
    resetForm() {
      this.email = "";
      this.content = "";
    },
  },

  computed: {
    isEmailValid() {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      return emailRegex.test(this.email);
    },
    isContentValid() {
      return this.content.length >= 10;
    },
  },
};
</script>

<template>
  <!-- <h5>PROVA BOTTONE</h5> -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
    data-bs-whatever="@mdo">
    Contatta Alloggio
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Scrivi a {{ this.apartment.title }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="messageform" method="post" @submit.prevent="createMessage">
            <div class="mb-3">
              <label for="email" class="col-form-label">E-Mail:</label>
              <input type="email" class="form-control" id="email" ref="email" autocomplete="email" v-model="email"
                required />
              <span v-if="!isEmailValid">Inserisci mail</span>
            </div>
            <div class="mb-3">
              <label for="content" class="col-form-label">Messaggio:</label>
              <textarea class="form-control" id="content" rows="20" ref="content" v-model="content" required></textarea>
              <span v-if="!isContentValid">Il contenuto deve essere di almeno 10 caratteri.</span>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Chiudi
              </button>
              <button type="submit" class="btn btn-primary">Invia</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
