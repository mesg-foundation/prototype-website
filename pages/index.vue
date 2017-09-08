<template>
  <div>
    <Hero full-page>
      <HomePageHeader></HomePageHeader>
    </Hero>
    <Goal class="mb-3"></Goal>
    <FeatureList class="features"></FeatureList>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import HomePageHeader from '~/components/HomePageHeader'
import Goal from '~/components/Goal'
import FeatureList from '~/components/FeatureList'
export default {
  components: {
    Hero,
    Goal,
    HomePageHeader,
    FeatureList
  }
}
</script>
