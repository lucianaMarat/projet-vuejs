<template>

   
   <div>

    <center><h1>Tableau avec les salaries</h1></center>
<Navbar/>
 <SalarieList/>
  </div>
</template>
<script >
import SalarieList from "../components/SalarieList.vue"
  export default {
    name: 'home',
    components: {
    SalarieList
    },
  }

</script>