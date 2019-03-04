<template>
   
   <div class="col-md">

    <center><h2>Delete Salarie</h2></center>
<Navbar/>
 <form class="sorting">
  <center>
        <input type="text" v-model="nom">
        <button type="button"  name="button" v-on:click="formData(nom)">supprimer</button>
  </center>
    </form>

  </div>
</template>

  </div>
</template>
// <script >
import SalarieService from "../services/SalarieService.vue"
  export default {
   
   data() {
    return{
    salarie:'',
      nom: '',
   // description: description,
   // debut: debut,
   // fin: fin,
   // montant: montant,
   // statut: statut
    }
  },
  methods: {
    formData: function (nom) {
      SalarieService.deleteSalaries(nom)
      .then((data) => {
        this.salarie = data;
        console.log(this.salarie);
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