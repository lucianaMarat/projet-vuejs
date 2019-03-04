<template>
  <div class="home">
  	
    <h2>Nombres de projets:{{projets.length}}</h2>
     
  </div>
</template>

<script>
import ProjetService from "../services/ProjetService.vue"
export default {
   data() {
    return{
    projets:[]
			}
		},
		created(){
			ProjetService.getProjet()
			.then((data) => {
				this.projets = data;
				console.log(this.projets);
			})
			
 }
}
  

</script>
