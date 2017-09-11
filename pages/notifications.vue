<template>
  <section>
    <Hero title="Ethereum to Web">
      <Subhead class="text--white mb-4">
        Execute any action you want in <strong>Real Time</strong> when your contract is executed.
      </Subhead>
    </Hero>
    <Layout>
      <div class="text-center">
      </div>
      <Feature
        title="Powerfull Webhook system">
        <p>Send the data from your Ethereum event to any webhook and connect directly your application backend to every <strong>Ethereum event in a second</strong>.</p>
        <p>You have also access to all the log to quickly see when something went wrong on the webhook.</p>
        <p><strong>Security is important</strong> so you are free to set any kind of verification via <strong>Custom Headers</strong> you can so trigger your webhook as an authenticated user.</p>
      </Feature>
      <Feature
        title="Custom functions"
        imageLeft>
        <p>Sometime it's necessary to have a specific code running for a specific action.</p>
        <p>Create a backend is heavy to manage, with our <strong>Custom Functions</strong> you can quickly run a piece of code without having to worry of infrastructure, server management etc...</p>
      </Feature>
      <Feature
        title="Slack notifications">
        <p>Almost every team uses <strong>Slack</strong> and spend their day on this amazing tool so it make sense to be able to receive your <strong>Ethereum Event</strong> directly into the Slack channel of your choice and never miss an action on your contracts.</p>
      </Feature>
      <Feature
        title="Email notifications"
        imageLeft>
        <p>Every application needs emails, how your application can run without any email notifications...</p>
        <p>You can now connect every <strong>Ethereum contracts</strong> to your <strong>Sendgrid</strong> account and start send emails</p>
        <p>With our custom template engine you can directly send the data of your contract into your emails</p>
      </Feature>
      <p>and much more to come...</p>
    </Layout>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Subhead from '@/components/Subhead'
import Feature from '@/components/Feature'
export default {
  components: {
    Hero,
    Subhead,
    Layout,
    Feature
  }
}
</script>
