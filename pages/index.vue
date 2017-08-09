<template>
  <div>
    <Hero full-page>
      <HomePageHeader></HomePageHeader>
    </Hero>
    <FeatureList></FeatureList>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import HomePageHeader from '~/components/HomePageHeader'
import FeatureList from '~/components/FeatureList'
export default {
  components: {
    Hero,
    HomePageHeader,
    FeatureList
  }
}
</script>
