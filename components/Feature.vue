<template>
  <Layout row>
    <Card hover flex :style="style">
      <CardTitle>
        {{ title }}
        <Tag v-if="comingSoon">Coming soon</Tag>
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
    comingSoon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      if (!this.image) { return {} }
      return {
        backgroundImage: `url(${this.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 90px',
        backgroundSize: 'contain'
      }
    }
  }
}
</script>
