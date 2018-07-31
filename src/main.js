import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
//import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

//const foo = 'foo'
import Index from './indexPage.vue'
import Libraries from './librariesPage.vue'
import Guide from './guidePage.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Index },
    { path: '/libraries', name: 'libraries', component: Libraries },
    { path: '/guide', name: 'guide', component: Guide },
    { path: 'api', name: 'api', beforeEnter() { location.href = 'http://127.0.0.1:4567' }},
  ]
})

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    components: {}
});
