<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="transparent"
      flat=""
      hide-on-scroll=""
      dark=""
      elevation=""
      height="100%"
      width="60rem"
    >
      <v-img
        class="d-none d-sm-flex"
        src="./assets/logo.svg" 
        aspect-ratio="1"
        contain=""
        height="2rem"
        position="left"
      >
      </v-img>
      <div class="d-none d-sm-flex">
        <v-btn text href="#">Правила</v-btn>
        <v-btn text href="#">Регистрация</v-btn>
        
        
      </div>
    </v-app-bar> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <alert-component/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {

    }
  }
};
</script>

<style>
  body {
    background-color: #292D7A;
    overflow: hidden;
  }
  .bodyb {
    background-color: #292D7A;
  }
</style>
