<template>
  <div id="app">
    <router-view/>
    <main-nav-bar id="tab_bar"/>
  </div>
</template>

<script>
import mainNavBar from '@/components/mainNavBar'

export default {
  name: 'app',
  components: {
    mainNavBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

#tab_bar {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 70px;
  text-align: center;
  line-height: 150%;
  border-top: 1px solid silver;
  z-index: 1;
}
</style>
