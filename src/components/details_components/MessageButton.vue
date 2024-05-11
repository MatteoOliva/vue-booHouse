<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- <h5>PROVA BOTTONE</h5> -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@mdo"
  >
    Scrivi messaggio
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Scrivi a NOME</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="email" class="col-form-label">E-Mail:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >Messaggio:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                rows="5"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Chiudi
          </button>
          <button type="button" class="btn btn-primary">Invia</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
