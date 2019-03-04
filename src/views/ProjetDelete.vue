<template>
   
   <div class="col-md">

    <center><h2>Delete a Project</h2></center>
<Navbar/>
 <form >
        <input type="text" v-model="name" >
        <button type="button"  name="button" v-on:click="formData(name)">supprimer</button>
   </form>
    

  </div>
</template>
<script >
import ProjetService from "../services/ProjetService.vue"
  export default {
   
   data() {
    return{
    projet:'',
     name: name,
 
    }
  },
  methods: {
    formData: function (name) {
      ProjetService.deleteProject(name)
      .then((data) => {
        this.projet = data;
        console.log(this.projet);
      })
      .catch(error => {
        console.log(error);
      })
    }
    
  }
 }

  
</script>
<style scoped>
  table td, table th{
    border: 3px solid black;
    font-size: 20px;
  }
  table th{
    font-weight: bold;
  }
  table{
    margin: 10px auto;
  }
</style>