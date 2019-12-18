import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Orders from './components/Orders.vue'
import Reservation from './components/Reservation.vue'
import Signup from './components/Signup.vue'
import Contact from './components/Contact.vue'
import Menu from './components/Menu.vue'


Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/orders', component: Orders },
  { path: '/reservation', component: Reservation },
  { path: '/signup', component: Signup },
  { path: '/contact', component: Contact },
  { path: '/menu', component: Menu },
  
  
]
const router = new VueRouter({
  mode: 'history',
  routes

})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
