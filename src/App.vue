<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
export default {
  name: 'App',
  created () {
    loadProgressBar({
      showSpinner: false,
      easing: 'ease',
      speed: 500
    })
  }
}
</script>

<style>

</style>
