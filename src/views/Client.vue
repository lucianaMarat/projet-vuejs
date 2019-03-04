<template>
  <h1>bonjour</h1>
</template><template>

   
   <div >
    <center><h1>Tableau des Clients</h1></center>
<Navbar/>
 <ClientList/>
   
  </div>
</template>
<script >
import ClientList from "../components/ClientList.vue"
  export default {
    name: 'home',
    components: {
    ClientList
    },
  }

</script>
  