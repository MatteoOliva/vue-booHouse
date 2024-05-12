<script>
// importo axios
import axios from "axios";
// importo store
import { store, api } from "../../store";

export default {
  data() {
    return {
      store,
      api,
      // formData: {
      //   apartment_id: this.apartment_id,
      //   email: "",
      //   content: "",
      // },
    };
  },

  props: {
    apartment_id: Number,
  },

  methods: {
    createMessage() {
      // salvo dati del form
      let formData = {
        apartment_id: this.apartment_id,
        email: document.getElementById("email").value,
        content: document.getElementById("content").value,
      };

      axios.post(api.basicsUrl + "/message", formData).then((response) => {
        this.isSending = false;
        console.log(response);

        // se la risposta dal db è positiva
        if (response.data.response) {
          this.resetForm();
          this.reloadPage();
          alert("messaggio inviato con successo");
        }
      });
    },

    // ricarico la pagina
    reloadPage() {
      window.location.reload();
    },
    // resetto il form
    resetForm() {
      this.email = "";
      this.content = "";
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
      <div class="modal-content  bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Scrivi a {{ this.apartment_id }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method="post" @submit.prevent="createMessage">
            <!-- <input
              type="hidden"
              name="apartment_id"
              for="apartment_id"
              v-model="this.apartment_id"
            /> -->
            <div class="mb-3">
              <label for="email" class="col-form-label">E-Mail:</label>
              <input type="email" class="form-control" id="email" v-model="email" ref="email" autocomplete="email"
                required />
            </div>
            <div class="mb-3">
              <label for="content" class="col-form-label">Messaggio:</label>
              <textarea class="form-control" id="content" rows="20" ref="content" v-model="content" required></textarea>
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
