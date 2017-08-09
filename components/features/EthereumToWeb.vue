<template>
  <Layout>
    <Card hover flex>
      <CardTitle>
        Ethereum Blockchain to Web
      </CardTitle>
      <Layout>
        <p>Get notified by a <strong>webhook</strong> every time an <strong>Event</strong> occurs on <strong>Ethereum Blockchain</strong>.</p>
        <p>Extend the possibilities of your <strong>Decentralized Application (DApp)</strong> with emails, sms, push notifications, invoice system and whatever external service you want to use</p>
      </Layout>
      <Btn class="ma-0 mt-2" to="/ethereum-to-web">see more</Btn>
    </Card>
    <!-- <img flex src="~/assets/features/ethereum-to-web.svg" alt="Ethereum Blockchain to Web"> -->
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
