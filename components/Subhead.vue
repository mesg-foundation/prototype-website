<template>
  <h2><slot></slot></h2>
</template>

<style lang="stylus" scoped>
  @import "~assets/style/variables"
  h2 {
    font-weight: 300;
    font-size: 2em;
    word-spacing: 5px;
    padding-bottom: 15px;
    display: block;
    width: 100%;
    @media screen and (min-width: $breakpoints.desktop) {
      font-size: 3em;
    }
  }
</style>
