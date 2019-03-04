<template>
  <div>
  <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          statut
        </th>
        
      </tr>
      <tr v-for='projet in projets'>
        <td>
           {{projet.name}}
        </td>
        <td>
           {{projet.statut}}
        </td>
        
      </tr>
    </table>
    <center>
    <router-link tag="button" to="/CreateProjet" class="btn btn-primary">Add </router-link>
    <router-link tag="button" to="/ProjetDetail" class="btn btn-primary">detail</router-link>
     <router-link tag="button" to="/ProjetUpdate" class="btn btn-primary">edit</router-link>
    <router-link tag="button" to="/ProjetDelete" class="btn btn-primary">delete</router-link>
    </center>
  </div>
</template>
<script >
import ProjetService from "../services/ProjetService.vue"
  export default {
   
   data() {
    return{
    projets:[]
      }
    },
    created(){
      ProjetService.getProjet()
      // fetch('')
      // .then((reponse) => {
      //  return response.json();
      // })
      .then((data) => {
        this.projets = data;
        console.log(this.projets);
      })

      .catch(error => {console.log(error)});
 }
}
  
</script>
<style scoped>
  table td, table th{
    border: 3px solid black;
    font-size: 28px;
    width: 20px;
  }
  table th{
    font-weight: bold;
  }
  table{
    margin: 30px auto;
  }
</style>