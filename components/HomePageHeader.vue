<template>
  <Layout>
    <Headline>
      <img src="~/assets/logo.svg" alt="Logo Etherestellar">
    </Headline>
    <Subhead class="mb-2 text--white">Connect Ethereum blockchain to the world</Subhead>
    <BuyButton
      primary>
      Get started now for free !
    </BuyButton>
  </Layout>
</template>

<script>
import BuyButton from '~/components/BuyButton'
import Headline from '~/components/Headline'
import Subhead from '~/components/Subhead'
import Layout from '~/components/Layout'
export default {
  components: {
    BuyButton,
    Headline,
    Subhead,
    Layout
  }
}
</script>

<style scoped>
img {
  height: 5em;
}
</style>
