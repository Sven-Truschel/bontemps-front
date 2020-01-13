import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Reservation from './components/Reservation.vue'
import Signup from './components/Signup.vue'
import Contact from './components/Contact.vue'
import Menu from './components/Menu.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/reservation', component: Reservation, name: 'Reserveringen' },
  { path: '/signup', component: Signup, name: 'Aanmelden'},
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/menu', component: Menu, name: 'Menu\'s' },
  
  
  
]
const router = new VueRouter({
  mode: 'history',
  routes

})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
