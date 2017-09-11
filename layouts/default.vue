<template>
  <div id="app">
    <ApplicationMenu></ApplicationMenu>
    <nuxt />
    <ApplicationFooter></ApplicationFooter>
  </div>
</template>

<script>
import ApplicationMenu from '~/components/ApplicationMenu'
import ApplicationFooter from '~/components/ApplicationFooter'
export default {
  components: {
    ApplicationMenu,
    ApplicationFooter
  }
}
</script>
