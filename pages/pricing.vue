<template>
  <div>
    <Hero class="header" title="Pricing">
      <Layout row class="price-table">
        <Plan
          v-for="(plan, i) in payablePlans" :key="plan.id"
          :plan="plan"
          :highlight="i === 1">
        </Plan>
      </Layout>
    </Hero>
    <Layout>
      <Plan
        :plan="freePlan"
        row>
      </Plan>
    </Layout>
    <FrequentlyAskedQuestions
      class="mt-3 mb-3"
      :questions="questions">
    </FrequentlyAskedQuestions>
  </div>
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
</style>
