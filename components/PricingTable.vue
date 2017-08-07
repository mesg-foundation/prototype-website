<template>
  <div row class="container">
    <Card
      v-for="(plan, i) in payablePlans" :key="plan.id"
      :highlight="i === 1"
      flex justify-center align-center
      class="text-center">
      <div column>
        <h4 class="title">{{ plan.title }}</h4>
        <span class="price">${{ plan.price / 100 }} <small>/ mo</small></span>
        <ul flex>
          <li><strong>{{ plan.executions }}</strong> webhook executions per month</li>
          <li><strong>{{ plan.contracts || 'unlimited' }}</strong> contracts</li>
          <li><strong>{{ plan.members || 'unlimited' }}</strong> team members</li>
        </ul>
        <BuyButton primary :planId="plan.id">
          Start
        </BuyButton>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '~/components/Card'
import BuyButton from '~/components/BuyButton'
export default {
  components: {
    Card,
    BuyButton
  },
  props: {
    plans: {
      type: Array,
      required: true
    }
  },
  computed: {
    payablePlans () {
      return this.plans
        .filter(x => x.price > 0)
    }
  }
}
</script>

<style scoped>
  .container {
    width: 900px;
    position: absolute;
    bottom: 5em;
  }
  .title {
    font-weight: 700;
    letter-spacing: 4.2px;
    line-height: 1;
    text-transform: uppercase;
  }
  .price {
    display: block;
    font-weight: 300;
    letter-spacing: -2.7px;
    font-size: 3.5em;
    padding: 16px 0 32px;
    color: var(--primary-color);
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
