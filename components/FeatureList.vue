<template>
  <Layout>
    <Subhead class="text-center">Meet our products</Subhead>

    <component row
      v-for="(feature, i) in features" :key="feature.key"
      class="mb-3 mt-3"
      :class="{ reverse: i % 2 === 1 }"
      :is="feature">
    </component>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import Subhead from '@/components/Subhead'
import EthereumToWeb from '@/components/features/EthereumToWeb'
import WebToEthereum from '@/components/features/WebToEthereum'
import EthereumNode from '@/components/features/EthereumNode'
export default {
  components: {
    Layout,
    Subhead
  },
  computed: {
    features () {
      return [
        EthereumToWeb,
        WebToEthereum,
        EthereumNode
      ]
    }
  }
}
</script>

<style scoped>
.reverse {
  flex-direction: row-reverse;
}
</style>
