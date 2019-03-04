<template>

  <div id="app">
    <Navbar/>
   <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/layout/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>
<style>
body {
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #2c0938;
  font-family: 'Signika', sans-serif;
}

#app {
  /*width: 270px;*/
  background: white;
  padding: 20px;
  margin: 30px;
  border-radius: 4px;
  opacity: 0.95;
}

h1 {
  text-align: center;
  margin: 5px;
  font-size: 20px;
}

li {
  list-style: none outside none;
}

.sorting {
  display: flex;
  border-bottom: 1px solid #ccc;
     padding: 13px 10px 21px 44px;
  input {
    width: 50%;
    margin-left: 10px;
  }
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
