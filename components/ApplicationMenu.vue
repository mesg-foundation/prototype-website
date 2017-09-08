<template>
  <nav row>
    <Btn light to="/">Etherstellar</Btn>
    <span flex></span>
    <Btn light to="/pricing">Pricing</Btn>
    <Btn light primary href="https://dashboard.etherstellar.io">Go to dashboard</Btn>
  </nav>
</template>

<script>
import Btn from '~/components/Btn'
export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
</style>
