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
    dark: {
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
        'button--dark': this.dark,
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
    padding: .75em 1em;
    margin: 1em;
    color: var(--text-light-color);
  }

  .button--dark {
    color: var(--text-dark-color);
  }

  .button--block {
    display: block;
  }

  .button--primary {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
  .button--primary:hover {
    color: #fff;
    background-color: var(--primary-color);
  }

  .button--secondary {
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }
  .button--secondary:hover {
    color: #fff;
    background-color: var(--secondary-color);
  }
</style>
