<template>
  <div class="home">
  	<NombreProjet/>
  	<NombreClient/>
  	<NombreSalarie/>
  </div>
</template>

<script>
import NombreProjet from "../components/NombreProjet.vue"
import NombreClient from "../components/NombreClient.vue"
import NombreSalarie from "../components/NombreSalarie.vue" 
export default {
  name: 'home',
  components: {
    NombreProjet,
    NombreClient,
    NombreSalarie
  },
  
}
  

</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>