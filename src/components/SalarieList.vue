<template>
  <div >
    
 <table>
      <tr>
        <th>
          Name
        </th>
         <td>
           Poste
        </td>
      </tr>
      <tr v-for="salarie in salaries">
        <td>
           {{salarie.nom}}
        </td>
         <td>
           {{salarie.poste}}
        </td>
      </tr>
    </table>
    <center>
    <router-link tag="button" to="/CreateSalaries" class="btn btn-primary">Add </router-link>
    <router-link tag="button" to="/SalariesDetails" class="btn btn-primary">detail</router-link>
    <router-link tag="button" to="/SalariesUpdate" class="btn btn-primary">edit</router-link>
     <router-link tag="button" to="/SalariesDelete" class="btn btn-primary">delete</router-link>
    </center> 
  </div>
</template>
<script >
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

      .catch(error => {console.log(error)});
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
