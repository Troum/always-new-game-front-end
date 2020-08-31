<template>
    <v-row class=" pa-0 ma-0 d-flex justify-center">
      <v-col cols="11" lg="12" xl="9" class="d-none descop d-md-flex f-screen">
        <v-img
                contain=""
                aspect-ratio="1.5"
                src="../assets/des1.svg"
        >

        </v-img>
      </v-col>


      <v-col cols="12" lg="12" xl="9" class="d-flex descop d-sm-none justify-end f-screen m1-cont">
        <v-img
                contain
                aspect-ratio=".4"
                src="../assets/m1.png"
                class="m1"
                width="100%"
                
        >

        </v-img>
      </v-col>





    </v-row>
</template>

<style>
    .f-screen {
        margin-top: -1rem;
    }
</style>
<style scoped>
.m1-cont {
    height: inherit;
}
.m1 {
    
}
</style>