<template>
  <Layout>
    <Card hover flex>
      <CardTitle>
        Ethereum Node On demand
        <Tag>Comming soon</Tag>
      </CardTitle>
      <Layout>
        <p>Create a Ethereum node just for your needs with a ready to use <strong>JSON-RPC</strong> connection to be able to connect your <strong>Decentralized Application (DApp)</strong> in a second</p>
        <p>We manage all the infrastructure and take care of the updates and syncronization you just have to focus on your application</p>
      </Layout>
      <Btn class="ma-0 mt-2" to="/ethereum-node">see more</Btn>
    </Card>
    <!-- <img flex src="~/assets/features/ethereum-node.svg" alt="Ethereum Node On demand"> -->
  </Layout>
</template>

<script>
import Btn from '@/components/Btn'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import CardTitle from '@/components/CardTitle'
import Layout from '@/components/Layout'
export default {
  components: {
    Btn,
    Tag,
    Card,
    CardTitle,
    Layout
  }
}
</script>
