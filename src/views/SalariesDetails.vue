<template>
   
   <div class="col-md">

    <center><h2>Detail Salarie</h2></center>
<Navbar/>
 <form class="sorting">
  <center>
        <input type="text" v-model="nom">
        <button type="button"  name="button" v-on:click="formData(nom)">editer</button>
  </center>
    </form>
     <table>
      <tr>
        <th>
          name
        </th>
        <th>
          prenom
        </th>
        <th>
          username 
        </th>
        <th>
          naissance
        </th>
        <th>
          adresse
        </th>
        <th>
          telephone
        </th>
        <th>
          mail
        </th>
        <th>
          poste
        </th>
        
      </tr>
      <tr >
        <td>
          {{salarie.nom}}
        </td>
        <td>
         {{salarie.prenom}}
        </td>
        <td>
           {{salarie.username}}
        </td>
        <td>
         {{salarie.naissance}}
        </td>
        <td>
          {{salarie.adresse}}
        </td>
        <td>
          {{salarie.telephone}}
        </td>
        <td>
          {{salarie.mail}}
        </td>
        <td>
          {{salarie.poste}}
        </td>
      </tr>
    </table>

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
      SalarieService.getSalarie(nom)
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

  
// </script>
<!-- // <style scoped>
//   table td, table th{
//     border: 3px solid black;
//     font-size: 20px;
//   }
//   table th{
//     font-weight: bold;
//   }
//   table{
//     margin: 10px auto;
//   }
// </style>
 -->

