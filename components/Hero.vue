<template>
  <section
    column align-center justify-center
    class="text-center">
    <Headline class="title" v-if="title">{{ title }}</Headline>
    <slot></slot>
  </section>
</template>

<script>
import Headline from '@/components/Headline'
export default {
  components: {
    Headline
  },
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
section {
  height: 200px;
  background: linear-gradient(to left top, #004e92, #000428);
}
.title {
  margin-bottom: 2em;
  margin-top: 1em;
}
</style>
