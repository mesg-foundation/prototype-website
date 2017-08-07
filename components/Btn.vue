<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    :class="classes">
    <slot></slot>
  </a>
  <nuxt-link
    v-else
    :to="to"
    :class="classes">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'button--primary': this.primary,
        'button--secondary': this.secondary,
        'button--light': this.light,
        'button--block': this.block
      }
    }
  }
}
</script>

<style scoped>
  a {
    display: inline-block;
    border-radius: .25em;
    text-decoration: none;
    text-transform: uppercase;
    padding: .75em 1em;
    margin: 1em;
    color: rgb(var(--text-color));
    transition: all 300ms;
  }

  .button--light {
    color: white;
  }

  .button--block {
    display: block;
  }

  .button--primary {
    border: 1px solid rgb(var(--primary-color));
    background-color: rgb(var(--primary-color));
    color: #fff;
  }
  .button--primary:hover {
    background-color: transparent;
    color: rgb(var(--primary-color));
  }

  .button--secondary {
    border: 1px solid rgb(var(--secondary-color));
    background-color: rgb(var(--secondary-color));
    color: #fff;
  }
  .button--secondary:hover {
    background-color: transparent;
    color: rgb(var(--secondary-color));
  }
</style>
