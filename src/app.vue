<template>
  <div>
    <cloudNav />
    <div class="container mx-auto px-8">
      <br /><br />
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
a:link { text-decoration: none;}
</style>

<script>
import cloudNav from 'components/cloudNav'
export default {
  name: 'app',
  components: {
    [cloudNav.name]: cloudNav
  }
}
</script>
