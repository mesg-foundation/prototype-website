<template>
  <Layout>
    <Headline class="mt-4">
      <Logo noSpiral></Logo>
    </Headline>
    <Subhead class="subhead mb-2 text--white">Interact easily with the Ethereum Blockchain</Subhead>
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

<style scoped>
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
