<template>
  <Hero full-page>
    <Layout>
      <Headline>
        <img src="~/assets/logo.svg" alt="Logo Etherestellar">
      </Headline>
      <Subhead class="text--white">Connect Ethereum to the rest of the world</Subhead>
      <BuyButton
        primary>
        Get started for free
      </BuyButton>
    </Layout>
  </Hero>
</template>

<script>
import BuyButton from '~/components/BuyButton'
import Hero from '~/components/Hero'
import Headline from '~/components/Headline'
import Subhead from '~/components/Subhead'
import Layout from '~/components/Layout'
export default {
  components: {
    BuyButton,
    Hero,
    Headline,
    Subhead,
    Layout
  }
}
</script>

<style scoped>
  h1 {
    font-size: 100px;
  }
  .text--white {
    color: #fff;
  }
</style>
