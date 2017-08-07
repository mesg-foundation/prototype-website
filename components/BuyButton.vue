<template>
  <Btn primary block :href="href">
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
      required: true
    }
  },
  computed: {
    href () {
      return `https://dashboard.etherstellar.io/signup?planId=${this.planId}`
    }
  }
}
</script>
