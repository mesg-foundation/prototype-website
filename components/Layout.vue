<template>
  <div
    :row="row"
    :column="column"
    class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    row: { type: Boolean, default: false },
    column: { type: Boolean, default: false }
  }
}
</script>


<style scoped>
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
