<template>
  <Feature
    title="Blockchain Notifications"
    to="/notifications"
    :image="require('~/assets/notifications.svg')">
    <p>Get notified in <strong>Real Time</strong> when an <strong>Event</strong> occurs on <strong>Ethereum Blockchain</strong>.</p>
    <p>Use this to connect any system you can think about (email, push notifications, invoice system...). We already include different services and if it's not enought, you can anytime <strong>create your own</strong> directly from the <strong>powerful dashboard</strong>.</p>
  </Feature>
</template>

<script>
import Feature from '@/components/Feature'
export default {
  components: {
    Feature
  }
}
</script>
