<template>
  <Btn v-bind="$attrs" :href="href">
    <slot></slot>
  </Btn>
</template>

<script>
import Btn from '@/components/Btn'
export default {
  components: {
    Btn
  },
  props: {
    planId: {
      type: String,
      default: null
    }
  },
  computed: {
    url () {
      return 'https://dashboard.etherstellar.io/signup'
    },
    href () {
      return this.planId ? [this.url, `planId=${this.planId}`].join('?') : this.url
    }
  }
}
</script>
