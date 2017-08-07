<template>
  <section :class="classes">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    highlight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'card--highlight': this.highlight
      }
    }
  }
}
</script>


<style scoped>
  section {
    background: white;
    box-shadow: 0 15px 45px rgba(0,0,0,.08);
    position: relative;
    border-radius: 6px;
    margin: .5em;
    padding: 40px;
    font-size: 13px;
  }

  .card--highlight {
    z-index: 1;
    transform: scale(1.1);
  }
</style>
