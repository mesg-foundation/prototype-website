<template>
  <h1><slot></slot></h1>
</template>

<style lang="stylus" scoped>
  @import "~assets/style/variables"
  h1 {
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 3em;
    line-height: 1.25em;
    display: block;
    width: 100%;
    @media screen and (min-width: $breakpoints.desktop) {
      font-size: 5em;
    }
  }
</style>
