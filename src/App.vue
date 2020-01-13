<template>
  <div id="app">
    

    <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav v-for="item in items" :key="item">
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
  },
}
</script>

<style>
body{
  
}
#app {
 
}


</style>
