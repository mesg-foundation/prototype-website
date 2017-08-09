<template>
  <Card
    flex justify-center align-center>
    <CardTitle>{{ plan.title }}</CardTitle>
    <Layout :column="!row" :row="row">
      <span class="price">${{ plan.price / 100 }} <small>/ mo</small></span>
      <ul flex>
        <li><strong>{{ plan.executions / 1000 + 'k' }}</strong> webhook executions per month</li>
        <li><strong>{{ plan.contracts || 'unlimited' }}</strong> contracts</li>
        <li><strong>{{ plan.members || 'unlimited' }}</strong> team members</li>
      </ul>
      <BuyButton
        v-if="!row"
        primary
        :planId="plan.id">
        Start
      </BuyButton>
    </Layout>
  </Card>
</template>

<script>
import Card from '~/components/Card'
import CardTitle from '~/components/CardTitle'
import BuyButton from '~/components/BuyButton'
import Layout from '~/components/Layout'
export default {
  components: {
    Card,
    CardTitle,
    Layout,
    BuyButton
  },
  props: {
    plan: {
      type: Object,
      required: true
    },
    row: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  section {
    min-width: 20em;
  }
  .price {
    display: block;
    font-weight: 300;
    font-size: 3.5em;
    margin-bottom: .75em;
    color: rgb(var(--primary-color));
  }
  .price small {
    font-size: .5em;
    bottom: 1em;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 1.15em;
    letter-spacing: .5px;
    line-height: 1.4;
    padding: .4em 1em;
  }
</style>
