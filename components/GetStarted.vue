<template>
  <div class="get-started">
    <Layout row justify-center align-center>
      <Layout column>
        <strong class="title">Ready to get started ?</strong>
        <p>Connect your Ethereum application now</p>
      </Layout>
      <BuyButton
        primary>
        Create a free account
      </BuyButton>
    </Layout>
  </div>
</template>

<script>
import Layout from '~/components/Layout'
import BuyButton from '~/components/BuyButton'
import Subhead from '~/components/Subhead'
export default {
  components: {
    Layout,
    BuyButton,
    Subhead
  }
}
</script>

<style lang="stylus" scoped>
@require "~assets/style/variables"
.get-started {
  background: $colors.white;
  padding: 3em 0;
  border-top: solid 1px darken($colors.white, 10%);
  border-bottom: solid 1px darken($colors.white, 10%);
}
</style>
