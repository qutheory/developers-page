<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg" style="float:left; margin-right:40px; width:50%; height:155px; margin-bottom:40px">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2" v-html="headline"></div>
      <p class="text-grey-darker text-base" v-html="text"></p>
    </div>
    <div class="px-6 py-4" style="float:left;">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2" v-html="tag"></span>
    </div>

    <div class="px-6 py-4" style="float:right;">
      <a v-if="link" :href="link" target="_BLANK">
        <span class="inline-block bg-blue-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </span>
      </a>
      <span v-else class="inline-block bg-red-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        Not available yet
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'libsBox',
  props: {
        headline: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    }
}
</script>
