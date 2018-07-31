<template>
  <div>
    <navigation class="developers-app__nav" />
    <div class="container mx-auto px-8">
      <br /><br />
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
a:link {
  text-decoration: none;
}
.router-link-active {
  color:#FFF;
}
</style>

<script>
    import navigation from 'components/navigation';
    export default {
        name: 'app',
        components: {
            [navigation.name]: navigation
        }
    }
</script>
