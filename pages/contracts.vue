<template>
  <section>
    <Hero title="Contract Management">
    </Hero>
    <Layout row>
      <Subhead class="text-center mb-4">
        Manage all your contracts in a single place
      </Subhead>
      <Feature
        class="half"
        title="Access to the data of the contract"
        :image="require('~/assets/data.svg')">
        <p>Like any business, your data are important, in the <strong>Ethereum blockchain</strong> it's the same so we make it easy for you to consult the data of your contract.</p>
        <p>Just go to your contract and visualize your data already synchonized to the blockchain and <strong>you don't have to setup anything</strong></p>
      </Feature>
      <Feature
        class="half"
        title="Connect an event"
        to="/notifications"
        :image="require('~/assets/connect.svg')">
        <p>Want to get <strong>Real Time Notifications</strong> every time an <strong>Event</strong> happens on your contract, you are now just one click away from it.</p>
        <p>With a single click you can connect the event of your choice to any action you want</p>
      </Feature>
      <Feature
        class="half"
        title="Access to the functions"
        :image="require('~/assets/functions.svg')">
        <p>Working with a team or when you work on a new contract can be complicated just to remember all the information contained in one contract.</p>
        <p>From the dashboard you can have a <strong>clear view</strong> of all available <strong>functions and their parameters</strong>, this is a lot easier than try to dig into the ABI file or the code</p>
      </Feature>
      <Feature
        class="half"
        title="Handle different blockchains"
        :image="require('~/assets/blockchain.svg')">
        <p>It's sometime hard to know what is deployed, on which <strong>blockchain</strong>.</p>
        <p>When you add a contract you can decide from which blockchain this contract come from</p>
      </Feature>
    </Layout>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Feature from '@/components/Feature'
import Subhead from '@/components/Subhead'
export default {
  components: {
    Hero,
    Subhead,
    Layout,
    Feature
  }
}
</script>
