<template>
  <v-container class="d-flex ma-0 pa-0 fill-height fullpage align-content-start" fluid=""  >
    <first class="desctop"></first>
    <meh class="desctop"></meh>
    <reg-cont></reg-cont>
    <foo class="desctop"></foo>
  </v-container>
</template>

<script>
  import First from '../components/First'
  import Meh from '../components/Meh'
  import RegCont from '../components/RegCont'
  import Foo from '../components/Foo'
  export default {
  components: {
    RegCont,
    First,
    Meh,
    Foo
  }
}
</script>

<style>
 .desctop {
 }
</style>

