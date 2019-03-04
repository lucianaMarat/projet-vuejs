<template>
   
   <div class="col-md">

    <center><h2>delete a client</h2></center>
<Navbar/>
 <form class="sorting">
        <input type="text" v-model="nom">
        <button type="button"  name="button" v-on:click="formData(nom)">supprimer</button>
    </form>
    <!-- <p v-if="formData=true"> client delete </p> -->
   

  </div>
</template>
<script >
import ClientService from "../services/ClientService.vue"
  export default {
   
   data() {
    return{
    client:'',
     nom: '',
    }
  },
  methods: {
    formData: function (nom) {
      ClientService.deleteClient(nom)
      .then((data) => {
        this.client = data;
        console.log(this.client);
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