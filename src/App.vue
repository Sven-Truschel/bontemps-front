<template>
  <div id="app">
    

    <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav v-for="(item, index) in items" :key="index">
        <b-nav-item :to="item.path">
          {{item.name}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


<router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$router.options.routes.forEach(route =>{
      this.items.push({
        name: route.name,
        path: route.path
      })
    })

    axios.get('https://localhost:44324/Menus/api').then(res => {
      console.log(res)
    })
  },
}
</script>

<style>
body{
  
}
#app {
 
}


</style>
