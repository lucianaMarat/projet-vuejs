

<template>
   
   <div>

    <center><h2>Detail Client</h2></center>
<Navbar/>

    
    <ClientDetailForm/>
  </div>
</template>
<script >
import ClientDetailForm from "../components/ClientDetailForm.vue"
  export default {
    name: 'home',
    components: {
    ClientDetailForm
    },
  }

</script>