<template>
  <section>
    <Hero class="header" title="Pricing">
      <p class="mb-3 text--white">We are now on beta and this service is provided for free until we ends the beta</p>
      <Layout row class="price-table">
        <Plan
          class="plan"
          v-for="plan in payablePlans" :key="plan.id"
          :plan="plan">
        </Plan>
      </Layout>
      <Layout>
        <Plan :plan="freePlan"></Plan>
      </Layout>
    </Hero>
    <FrequentlyAskedQuestions
      class="mt-3 mb-3"
      :questions="questions">
    </FrequentlyAskedQuestions>
  </section>
</template>

<script>
import fetchPlans from '~/plugins/fetchPlans'
import fetchQuestions from '~/plugins/fetchQuestions'
import Layout from '~/components/Layout'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Plan from '~/components/Plan'
import FrequentlyAskedQuestions from '~/components/FrequentlyAskedQuestions'

export default {
  components: {
    Hero,
    Card,
    Layout,
    Plan,
    FrequentlyAskedQuestions
  },
  asyncData () {
    return Promise.all([
      fetchPlans(),
      fetchQuestions()
    ])
      .then(([plans, questions]) => ({ plans, questions }))
  },
  computed: {
    freePlan () {
      return this.plans
        .filter(x => x.price === 0)[0]
    },
    payablePlans () {
      return this.plans
        .filter(x => x.price > 0)
    }
  }
}
</script>

<style scoped>
  .header {
    margin-bottom: 7em;
  }
  .price-table {
    transform: translateY(3em);
  }
  .plan:nth-child(2) {
    z-index: 1;
    transform: scale(1.1);
  }
</style>
