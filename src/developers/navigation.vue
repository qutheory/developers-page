<template>
  <nav class="flex items-center justify-between flex-wrap bg-grey-darkest p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="https://dashboard.vapor.cloud/images/cloud-gray.svg" style="margin-right:20px;" />
      <span class="font-semibold text-xl tracking-tight">Vapor Cloud | Developer Portal</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">

      </div>
      <div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-xl lg:flex-grow">
            <router-link :to="{ name: 'home' }" exact class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              home
            </router-link>
            <router-link :to="{ name: 'guide' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              guides
            </router-link>
            <router-link :to="{ name: 'libraries' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              libraries
            </router-link>
            <router-link :to="{ name: 'api' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              api docs
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'navigation',
        components: {}
    };
</script>
