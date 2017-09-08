<template>
  <section>
    <Hero title="Contract Management">
      <Subhead class="text--white mb-4">
        Manage all your contract and the contract you watch in a single place
      </Subhead>
    </Hero>
    <Layout>
      <Feature
        title="Access to the data of the contract">
        <p>Like any business your data are important, in the <strong>Ethereum blockchain</strong> it's the same so we make it easy for you to consult the data of your contract.</p>
        <p>Just go to your contract and visualize your data already synchonised to the blockchain and <strong>you don't have to setup anything</strong></p>
      </Feature>
      <Feature
        title="Connect an event"
        to="/ethereum-to-web">
        <p>Whant to get <strong>Real Time Notifications</strong> every time an <strong>Event</strong> happen on your contract, you are now just one click away from it.</p>
        <p>In a single click you can connect the event of your choice to any action you want</p>
      </Feature>
      <Feature
        title="Access to the functions">
        <p>Working with a team or when you work on a new contract can be complicated just to remember all the informations contained in one contract.</p>
        <p>From the dashboard you can have a <strong>clear view</strong> of all availables <strong>functions and their parameters</strong>, this is a lot easier than try to digg into the ABI file or the code</p>
      </Feature>
      <Feature
        title="Handle different blockchains">
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
