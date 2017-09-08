<template>
  <Layout>
    <Subhead class="mb-2">Frequently Asked Questions</Subhead>
    <div
      v-for="question in questions" :key="question.id"
      flex class="mb-2">
      <strong class="title mb-1">
        <i class="mr-1"></i>
        {{ question.title }}
      </strong>
      <p>{{ question.response }}</p>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import Subhead from '@/components/Subhead'
export default {
  components: {
    Layout,
    Subhead
  },
  props: {
    questions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/style/variables'
  i::before {
    content: '?';
    display: inline-block;
    width: 1.6em;
    height: 1.6em;
    border-radius: 50%;
    line-height: 1.6em;
    text-align: center;
    font-style: normal;
    color: $colors.primary;
    background: alpha($colors.primary, 0.3);
    font-size: .75em;
  }
</style>
