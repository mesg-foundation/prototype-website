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

<style lang="stylus" scoped>
@require "~assets/style/variables"
section {
  margin-bottom: 7em;
  position: relative;
}
section::before {
  content: '';
  display: block;
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transform: skewY(-5deg);
  background: linear-gradient(to left top, $colors.blue-light, $colors.blue-dark);

}
.title {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  color: #fff;
}
</style>
