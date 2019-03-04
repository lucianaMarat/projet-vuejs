 <template>
 	<div>
  <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          secteur
        </th>
       
          
        
      </tr>
      <tr v-for='client in clients' :key = client.nom>
        <td>
           {{client.nom}}
        </td>
        <td>
          {{client.secteur}}
        </td>
        
      </tr>
    </table>
    <router-link tag="button" to="/CreateClient" class="btn btn-primary">Add </router-link>
    <router-link tag="button" to="/ClientDetail" class="btn btn-primary">detail</router-link>
     <router-link tag="button" to="/ClientUpdate" class="btn btn-primary">edit</router-link>
    <router-link tag="button" to="/ClientDelete" class="btn btn-primary">delete</router-link>
  </div>
</template>
<script >
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