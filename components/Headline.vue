<template>
  <h1><slot></slot></h1>
</template>

<style scoped>
  h1 {
    font-family: var(--title-font);
    display: block;
    font-weight: 300;
    font-size: 5em;
    color: var(--text-light-color);
    letter-spacing: 1px;
  }
</style>
