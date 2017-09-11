<template>
  <Layout>
    <Headline>
      <Logo noSpiral></Logo>
    </Headline>
    <Subhead class="subhead mb-2 text--white">Interact easily with Ethereum Blockchain</Subhead>
    <BuyButton
      class="action"
      primary>
      Get started now for free !
    </BuyButton>
  </Layout>
</template>

<script>
import Logo from '~/components/Logo'
import BuyButton from '~/components/BuyButton'
import Headline from '~/components/Headline'
import Subhead from '~/components/Subhead'
import Layout from '~/components/Layout'
export default {
  components: {
    Logo,
    BuyButton,
    Headline,
    Subhead,
    Layout
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/style/variables"
h1 {
  margin-top: 3em;
  @media screen and (min-width: $breakpoints.tablet) {
    margin-top: 1em;
  }
  @media screen and (min-width: $breakpoints.desktop) {
    margin-top: 0;
  }
}

.subhead {
  animation: show 1s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.action {
  animation: show 1s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 3s;
}

@keyframes show {
  0% { opacity: 0; transform: translateY(-.2em); }
}
</style>
