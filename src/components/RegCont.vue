<template>
    <v-row class="pa-0 ma-0 d-flex justify-center align-center " style="">
      <v-col cols="11" md="12" lg="12" xl="9" class="d-none d-md-flex reg-container">

            <v-img
                contain=""
                aspect-ratio="1.61"
                src="../assets/des3.svg"
                class="form_bg"
        >

        </v-img>

          <registration />
      </v-col>


      <v-col cols="12" md="12" lg="12" xl="9" class="d-flex d-md-none reg-container-mob">

          <registration />
      </v-col>




    </v-row>
</template>

<script>
import Registration from '../components/Registration'
export default {
    components: {
    Registration
  }
}
</script>

<style>
.reg-container {
  background: url(../assets/des3.svg) center/96.3% no-repeat;
  margin-top: -9.5rem;
  z-index: 1!important;
  margin-bottom: -10.2rem;
}
.form_bg {
    margin-bottom: -60rem;
}
.reg-container-mob {
    margin-top: -150%;
    padding-top: 5rem;
    background-color: #041537;
    height: 180vh!important;
    margin-bottom: 40rem;
}

</style>
          