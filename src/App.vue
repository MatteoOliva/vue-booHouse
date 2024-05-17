    <script>
    import LoadingModal from './components/LoadingModal.vue';
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
   
    
    export default {
      components: { LoadingModal, AppHeader, AppFooter },

    };
    </script>

<!-- App.vue -->
<template>
  <div id="app">
    <loading-modal />
    <AppHeader />
    <router-view/>
    <AppFooter />
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss";

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
