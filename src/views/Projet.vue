<template>

   <div>
    <center><h1>Tableau des projets</h1></center>
<Navbar/>
 	<ProjetList/>
 </div>
  </template>
<script >
import ProjetList from "../components/ProjetList.vue"
  export default {
    name: 'home',
    components: {
    ProjetList
    },
  }

</script>
