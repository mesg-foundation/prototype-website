<template>
  <Layout>
    <Subhead class="text-center mb-3">Our goals</Subhead>
    <Card>
      <p class="mb-1">We want to provide some <strong> ⚙️ tools to help developpers</strong> to create quickly and easily some applications based on <strong>Ethereum Blockchain</strong> with all the tools and services they already know.</p>
      <p class="mb-1">
        With thoses tools you will be able to do some actions that your application needs like send some <strong> ✉️ emails</strong>, <strong> 📱 push notifications</strong>, <strong> 💬 Slack notifications</strong>...
        or even update some data automatically on the blockchain like create some transactions, syncronize your applications with the blockchain.
      </p>
      <p class="mb-1">Almost anything you want and need to do to create an awesome application using the security of <strong>Ethereum Blockchain</strong> is now possible easily.</p>
      <p class="mb-1">We wait to see what kind of awesome application you will do 😍.</p>
    </Card>
  </Layout>
</template>

<script>
  import Layout from '~/components/Layout'
  import Subhead from '~/components/Subhead'
  import Card from '~/components/Card'
  export default {
    components: {
      Layout,
      Subhead,
      Card
    }
  }
</script>
