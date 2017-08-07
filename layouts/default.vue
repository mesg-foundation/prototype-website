<template>
  <div>
    <ApplicationMenu></ApplicationMenu>
    <nuxt />
  </div>
</template>

<script>
import ApplicationMenu from '~/components/ApplicationMenu'
export default {
  components: {
    ApplicationMenu
  }
}
</script>

<style>
:root {
  --font: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --title-font: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  --primary-color: #3ecf8e;
  --secondary-color: #35495e;

  --text-light-color: #fff;
  --text-dark-color: #6b7c94;
}

html {
  font-family: var(--font);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

[row] {
  display: flex;
  flex-direction: row;
}

[column] {
  display: flex;
  flex-direction: column;
  height: 100%;
}

[flex] {
  flex: 1;
}

[full-page] { min-height: 100vh; }
[align-center] { align-items: center; }
[justify-center] { justify-content: center; }

.text-center { text-align: center }
</style>
