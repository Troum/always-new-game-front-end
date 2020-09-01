<template>
    <v-row class=" pa-0 ma-0 d-flex justify-center align-start foo-screen">

      <v-col cols="11" lg="12" xl="9" class="d-none d-md-flex ">
        <v-img
                contain=""
                aspect-ratio="2.25"
                src="../assets/footer.svg"
                class="foo-pic"
        >

        </v-img>
      </v-col>



      <v-col cols="11" lg="12" xl="9" class="d-flex d-sm-none foo-mob-cont">
        <v-img
                contain=""
                aspect-ratio=".25"
                src="../assets/mfoo.png"
                class="foo-pic-mob"
        >

        </v-img>
      </v-col>







    </v-row>
</template>


<style>
    .foo-screen {
   /*  z-index: 1;
    margin-top: -16.5rem;
    margin-bottom: -10rem; */
     height: 44vw;
     z-index: 1;
     margin-top: -20rem;
     padding-top: 10rem;
     padding-bottom: 10rem!important;
     margin-bottom: 10rem!important;
     
  }
  .foo-pic {
    margin-top: .9rem;
     padding-bottom: 0rem!important;
     padding-top: 0px!important;
     margin-bottom: 10rem!important;
     
  }
  .foo-pic-mob {
    margin-top: -60vw;
    min-width: 102vw;
    margin-left: -8.6vw;
    bottom: -2rem;
  }
  @media screen and (max-width: 700px) {
    .foo-screen {
      height: inherit;
    }
  }
</style>