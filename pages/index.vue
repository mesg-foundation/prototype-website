<template>
  <Hero full-page>
    <div>
      <Headline class="text--white">etherstellar.io</Headline>
      <Subhead class="text--white">Etherstellar.io website</Subhead>
      <div class="links">
        <Btn
          href="https://nuxtjs.org/"
          primary>
          Documentation
        </Btn>
        <Btn
          href="https://github.com/nuxt/nuxt.js"
          secondary>
          GitHub
        </Btn>
      </div>
    </div>
  </Hero>
</template>

<script>
import Btn from '~/components/Btn'
import Hero from '~/components/Hero'
import Headline from '~/components/Headline'
import Subhead from '~/components/Subhead'
export default {
  components: {
    Btn,
    Hero,
    Headline,
    Subhead
  }
}
</script>

<style scoped>
  h1 {
    font-size: 100px;
  }
  .text--white {
    color: #fff;
  }
</style>
