<template>
  <div>
    <ApplicationMenu></ApplicationMenu>
    <nuxt />
    <ApplicationFooter></ApplicationFooter>
  </div>
</template>

<script>
import ApplicationMenu from '~/components/ApplicationMenu'
import ApplicationFooter from '~/components/ApplicationFooter'
export default {
  components: {
    ApplicationMenu,
    ApplicationFooter
  }
}
</script>

<style>
:root {
  --font: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --title-font: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  --primary-color: 40, 175, 96;
  --secondary-color: 53, 73, 94;

  --title-color: 50, 50, 93;
  --text-color: 107, 124, 147;
}
</style>

<style>
html {
  font-family: var(--font);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: rgb(var(--text-color));
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style>
[row] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

[column] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}

[flex] { flex: 1!important; }
[full-page] { min-height: 100vh!important; }
[align-center] { align-items: center!important; }
[justify-center] { justify-content: center!important; }

.text-center { text-align: center }

h1, h2, h3, h4, h5, .title {
  font-family: var(--title-font);
  color: rgb(var(--title-color));
  display: block;
}

.title {
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
}

p {
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
}

.ma-0 { margin: 0rem!important; } .ml-0 { margin-left: 0rem!important; } .mr-0 { margin-right: 0rem!important; } .mt-0 { margin-top: 0rem!important; } .mb-0 { margin-bottom: 0rem!important; }
.ma-1 { margin: 1rem!important; } .ml-1 { margin-left: 1rem!important; } .mr-1 { margin-right: 1rem!important; } .mt-1 { margin-top: 1rem!important; } .mb-1 { margin-bottom: 1rem!important; }
.ma-2 { margin: 2rem!important; } .ml-2 { margin-left: 2rem!important; } .mr-2 { margin-right: 2rem!important; } .mt-2 { margin-top: 2rem!important; } .mb-2 { margin-bottom: 2rem!important; }
.ma-3 { margin: 3rem!important; } .ml-3 { margin-left: 3rem!important; } .mr-3 { margin-right: 3rem!important; } .mt-3 { margin-top: 3rem!important; } .mb-3 { margin-bottom: 3rem!important; }

.pa-0 { padding: 0rem!important; } .pl-0 { padding-left: 0rem!important; } .pr-0 { padding-right: 0rem!important; } .pt-0 { padding-top: 0rem!important; } .pb-0 { padding-bottom: 0rem!important; }
.pa-1 { padding: 1rem!important; } .pl-1 { padding-left: 1rem!important; } .pr-1 { padding-right: 1rem!important; } .pt-1 { padding-top: 1rem!important; } .pb-1 { padding-bottom: 1rem!important; }
.pa-2 { padding: 2rem!important; } .pl-2 { padding-left: 2rem!important; } .pr-2 { padding-right: 2rem!important; } .pt-2 { padding-top: 2rem!important; } .pb-2 { padding-bottom: 2rem!important; }
.pa-3 { padding: 3rem!important; } .pl-3 { padding-left: 3rem!important; } .pr-3 { padding-right: 3rem!important; } .pt-3 { padding-top: 3rem!important; } .pb-3 { padding-bottom: 3rem!important; }

.text--white { color: #fff!important; }
.text--primary { color: rgb(var(--primary-color))!important; }
.text--secondary { color: rgb(var(--secondary-color))!important; }
</style>
