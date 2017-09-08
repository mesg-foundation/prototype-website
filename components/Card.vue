<template>
  <section :class="{ hover }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="stylus" scoped>
  @import "~assets/style/variables"
  section {
    background: $colors.white;
    box-shadow: 0 15px 45px rgba(0,0,0,.08);
    position: relative;
    border-radius: 6px;
    margin: .5em;
    padding: 40px;
    font-size: 13px;
  }
  section.hover {
    transition: all 300ms;
  }
  section.hover:hover {
    box-shadow: 0 20px 60px rgba(0,0,0,.08);
    transform: translateY(-.2em);
  }
</style>
