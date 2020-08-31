<template>
    <v-row class=" pa-0 ma-0 d-flex justify-center align-center">

      <v-col cols="11" md="12" lg="12" xl="9" class="d-none d-md-flex s-screen">
        <v-img
                contain=""
                aspect-ratio="1.57"
                src="../assets/des2.svg"
        >
        <div class="div-rull">
            <a href="rulles.pdf" target="_blank">
            <p class="rull"> <u>Подробнее о правилах акции </u></p>
            </a>
        </div>
        

        </v-img>

      </v-col>

        <v-col cols="11" md="12" lg="12" xl="9" class="d-flex d-xs-flex d-sm-none m2-cont">
        <v-img
                contain=""
                aspect-ratio=".14"
                src="../assets/m2.svg"
                style="m2"
                height="130%"
        >
        <div class="div-rull-mob">
            <a href="rulles.pdf" target="_blank">
            <div class="rull-mob"></div>
            </a>
        </div>
        

        </v-img>
      </v-col>



    </v-row>
</template>

<style>
  
  .s-screen {
    margin-top: -1.6rem;
    z-index: 10;
  }
  .div-rull {
      position: relative;
  }
  .rull {
      position: absolute;
      color: white;
      text-align: center;
      padding-top: 50%;
      left: 50%;
      margin-left: -5.5rem;
  }
  .m2 {
      height: inherit;
      min-width: 100rem;
      margin-top: -10rem!important;
      
  }
  .m2-cont {
      padding: 0!important;
      margin-top: -130%;
      
  }
  .div-rull-mob {
      position: relative;
      z-index: 10;
  }
  .rull-mob {
      position: absolute;
      color: white;
      text-align: center;
      padding-top: 2rem;
      margin-top: 542%;
      left: 50%;
      margin-left: -10rem;
      background-color: rgba(255, 0, 0, 0);
      width: 20rem;
  }
  
</style>