<template>
   
   <div >
 <form class="sorting">
        <input type="text" v-model="nom">
        <button type="button"  name="button" v-on:click="formData(nom)">editer</button>
    </form>
    <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          adresse
        </th>
        <th>
          contact 
        </th>
        <th>
          secteur
        </th>
        
      </tr>
      <tr >
        <td>
          {{client.nom}}
        </td>
        <td>
         {{client.adresse}}
        </td>
        <td>
           {{client.contact}}
        </td>
        <td>
         {{client.Secteur}}
        </td>
       
      </tr>
    </table>

  </div>
</template>
<script >
import ClientService from "../services/ClientService.vue"
  export default {
   
   data() {
    return{
    client:'',
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
      ClientService.getClient(nom)
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