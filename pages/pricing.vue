<template>
  <Hero class="header" title="Pricing">
    <PricingTable :plans="plans"></PricingTable>
  </Hero>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'

const query = `query {
  allPlans {
    id
    title
    price
    currency
    executions
    members
    contracts
  }
}`

export default {
  components: {
    Hero,
    PricingTable
  },
  asyncData () {
    return axios('https://api.graph.cool/simple/v1/eth-hook', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      data: { query }
    })
      .then(({ data }) => data.data.allPlans)
      .then(plans => ({ plans }))
  }
}
</script>

<style scoped>
  .header {
    height: 600px;
  }
  .title {
    margin-bottom: 2em;
  }
</style>
