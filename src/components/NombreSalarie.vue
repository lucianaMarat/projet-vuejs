<template>
  <div class="home">
      <h2>Nombres de salaries:{{salaries.length}}</h2>
  </div>
</template>

<script>
import SalarieService from "../services/SalarieService.vue"
export default {
   data() {
    return{
    salaries:[]
			}
		},
		created(){
			 SalarieService.getSalaries()
			.then((data) => {
				this.salaries = data;
				console.log(this.salaries);
			})
		
 }
}
  

</script>
