  <template>
	<div >
    <h2>  Creation Project</h2>
    <p v-if="errors.length">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
<form >
  <div class="form-group">
    <label for="name"> Name:</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="price">Description:</label>
    <input type="text" class="form-control" id="" v-model="description">
  </div>
  <div class="form-group">
    <label for="description">Date de debut:</label>
    <input type="date" class="form-control" id="description" v-model="debut">
  </div>
  <div class="form-group">
    <label for="tva">Date de fin:</label>
    <input type="date" class="form-control" id="tva" v-model="fin">
  </div>
  <div class="form-group">
    <label for="tva">Le Montant:</label>
    <input type="number" class="form-control" id="tva" v-model="montant">
  </div>
  <div class="form-group">
    <label for="tva">Statut:</label>
    <input type="text" class="form-control" id="tva" v-model="statut">
  </div>
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(name, description, debut, fin, montant, statut)">Submit</button>
</form>
	</div>
</template>
<script>

import ProjetService from "../services/ProjetService.vue"
export default {
  name: 'CreateProjet',
  data () {
    return {
          errors:[],
     name: null,
     description: null,
   debut: null,
   fin: null,
   montant: null,
   statut: null,
      name: "",
      description: "",
      debut: "",
      fin: "",
      montant: "",
      statut: ""
    }
  },
  methods: {
    formData: function (name, description, debut, fin, montant, statut){
       if(this.name && this.description && this.debut && this.fin && this.montant && this.statut) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Nom required.");
      if(!this.description) this.errors.push("description required.");
      if(!this.debut) this.errors.push("debut required");
      if(!this.fin) this.errors.push("fin required.");
      if(!this.montant) this.errors.push("montant required.");
      if(!this.statut) this.errors.push("statut required.");
        
      ProjetService.createProject(name, description, debut, fin, montant, statut)
     }
  }
};
</script>

<style scoped>
form{
  width: 50%;
  margin: 10px auto;
}
</style>