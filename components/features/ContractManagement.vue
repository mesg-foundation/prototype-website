<template>
  <Feature
    title="Contract management"
    to="/contracts"
    :image="require('~/assets/code.svg')">
    <p>Find in a single place all information about your <strong>Ethereum contracts</strong>.</p>
    <p>Have a clear interface to see the details and the <strong>data of your contracts</strong> and quickly interact with it.</p>
  </Feature>
</template>

<script>
import Feature from '@/components/Feature'
export default {
  components: {
    Feature
  }
}
</script>
