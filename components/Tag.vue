<template>
  <span><slot></slot></span>
</template>

<style lang="stylus" scoped>
  @require '~assets/style/variables'
  span {
    background-color: alpha($colors.secondary, .5);
    color: white;
    padding: .25em .75em;
    border-radius: 3px;
  }
</style>
