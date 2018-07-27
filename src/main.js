import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//const foo = 'foo'
import Index from './indexPage.vue'
import Libraries from './librariesPage.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Index },
    { path: '/libraries', name: 'libraries', component: Libraries },
    { path: 'api', name: 'api', beforeEnter() { location.href = 'http://10.0.0.53:4567' }}
  ]
})


new Vue({
    router,
    el: '#app',
    render: h => h(App),
    components: {}
});
