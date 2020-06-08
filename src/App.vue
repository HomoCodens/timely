<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      interval: 0
    }
  },
  mounted () {
    this.interval = window.setInterval(() => {
      this.$store.dispatch('tick')
    }, 1000)
  },
  beforeDestroy () {
    window.clearInterval(this.interval)
    this.$store.dispatch('tick')
  }
}
</script>
