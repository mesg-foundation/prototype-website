<template>
  <Layout>
    <Card flex>
      <CardTitle>Web to Ethereum Blockchain</CardTitle>
      <Layout>
        <p>Simply call a classic <strong>API</strong> or use a <strong>webhook endpoint</strong> to send any data in your <strong>Ethereum contract</strong>.</p>
      </Layout>
      <Btn class="ma-0 mt-2" to="/web-to-ethereum">see more</Btn>
    </Card>
    <!-- <img flex src="~/assets/features/web-to-ethereum.svg" alt="Web to Ethereum Blockchain"> -->
  </Layout>
</template>

<script>
import Btn from '@/components/Btn'
import Card from '@/components/Card'
import CardTitle from '@/components/CardTitle'
import Layout from '@/components/Layout'
export default {
  components: {
    Btn,
    Card,
    CardTitle,
    Layout
  }
}
</script>
