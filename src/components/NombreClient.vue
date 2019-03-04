<template>
  <div class="home">
  	
     <h2>Nombres de clients:{{clients.length}}</h2>
  </div>
</template>

<script>
import ClientService from "../services/ClientService.vue"
export default {
   data() {
    return{
    clients:[]
			}
		},
		created(){
			 ClientService.getClients()
			.then((data) => {
				this.clients = data;
				console.log(this.clients);
			})
			// .then((data) => {
			// 	this.clients = data;
			// 	console.log(this.clients);
			// })
			// .then((data) => {
			// 	this.salaries = data;
			// 	console.log(this.salaries);
			// })

			// .catch(error => {console.log(error)});
 }
}
  

</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>