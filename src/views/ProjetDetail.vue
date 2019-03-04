<template>
   
   <div class="col-md">

    <center><h2>Detail Project</h2></center>
<Navbar/>
 <form class="sorting">
        <input type="text" v-model="name">
        <button type="button"  name="button" v-on:click="formData(name)">editer</button>
    </form>
    <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          date de debut
        </th>
        <th>
          date de fin 
        </th>
        <th>
          montant
        </th>
        <th>
          statut
        </th>
      </tr>
      <tr >
        <td>
          {{projet.name}}
        </td>
        <td>
         {{projet.debut}}
        </td>
        <td>
           {{projet.fin}}
        </td>
        <td>
         {{projet.montant}}
        </td>
        <td>
          {{projet.montant}}
        </td>
      </tr>
    </table>

  </div>
</template>
<script >
import ProjetService from "../services/ProjetService.vue"
  export default {
   
   data() {
    return{
    projet:'',
       name: name,
   // description: description,
   // debut: debut,
   // fin: fin,
   // montant: montant,
   // statut: statut
    }
  },
  methods: {
    formData: function (name) {
      ProjetService.getProject(name)
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