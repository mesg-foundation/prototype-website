<template>
  <div class="get-started">
    <Layout row justify-center align-center>
      <Layout column>
        <strong class="title">Ready to get started ?</strong>
        <p>Connect your Ethereum application now</p>
      </Layout>
      <Btn
        primary
        href="https://dashboard.etherstellar.io/signup">
        Create a free account
      </Btn>
    </Layout>
  </div>
</template>

<script>
import Layout from '~/components/Layout'
import Btn from '~/components/Btn'
import Subhead from '~/components/Subhead'
export default {
  components: {
    Layout,
    Btn,
    Subhead
  }
}
</script>

<style scoped>
.get-started {
  background: #f5f4f9;
  padding: 3em 0;
  border-top: solid 1px #eeeeee;
  border-bottom: solid 1px #eeeeee;
}
</style>
