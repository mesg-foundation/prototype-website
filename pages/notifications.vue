<template>
  <section>
    <Hero title="Blockchain Notifications"></Hero>
    <Layout row>
      <Subhead class="text-center mb-4">
        Execute any action you want in <strong>Real Time</strong> when your contract is executed.
      </Subhead>
      <Feature
        class="half"
        title="Powerful Webhook system"
        :image="require('~/assets/webhook.svg')">
        <p>Send the data from your Ethereum event to any webhook and connect directly your application backend to every <strong>Ethereum event in a second</strong>.</p>
        <p>You have also access to all the logs to quickly see when something went wrong on the webhook.</p>
        <p><strong>Security is important</strong> so you are free to set any kind of verification via <strong>Custom Headers</strong> you can so trigger your webhook as an authenticated user.</p>
      </Feature>
      <Feature
        class="half"
        title="Custom functions"
        :image="require('~/assets/functions.svg')">
        <p>Sometimes it's necessary to have a specific code running for a specific action.</p>
        <p>Create a backend is heavy to manage, with our <strong>Custom Functions</strong> you can quickly run a piece of code without having to worry about infrastructure, server management etc...</p>
      </Feature>
      <Feature
        class="half"
        title="Slack notifications"
        :image="require('~/assets/slack.svg')">
        <p>Almost every team uses <strong>Slack</strong> and spend their day on this amazing tool so it make sense to be able to receive your <strong>Ethereum Event</strong> directly into the Slack channel of your choice and never miss an action on your contracts.</p>
      </Feature>
      <Feature
        class="half"
        title="Email notifications"
        :image="require('~/assets/email.svg')">
        <p>Every application needs emails, how your application can run without any email notifications...</p>
        <p>You can now connect every <strong>Ethereum contract</strong> to your <strong>Sendgrid</strong> account and start sending emails</p>
        <p>With our custom template engine you can directly send the data of your contract in your emails</p>
      </Feature>
      <div class="text-center mt-2">
        <p>and much more to come...</p>
      </div>
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
