<template>
  <Layout row>
    <Card class="mb-2" hover flex>
      <CardTitle>
        {{ title }}
        <Tag v-if="commingSoon">Comming soon</Tag>
      </CardTitle>
      <Layout row>
        <div flex>
          <slot></slot>
        </div>
      </Layout>
      <Btn v-if="to" class="ma-0 mt-2" :to="to">see more</Btn>
    </Card>
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
  },
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: [String, Object],
      default: null
    },
    image: {
      type: String,
      default: null
    },
    imageLeft: {
      type: Boolean,
      default: false
    },
    commingSoon: {
      type: Boolean,
      default: false
    }
  }
}
</script>
