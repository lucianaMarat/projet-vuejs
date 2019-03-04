 <template>
	<div class="CreateProduct">
    <h2>  Creation Client</h2>
    <p v-if="errors.length">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
<form >
  <div class="form-group">
    <label for="nom"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="nom">
  </div>
  <div class="form-group">
    <label for="adresse">rue:</label>
    <input type="text" class="form-control" id="adress" v-model="rue">
  </div>
  <div class="form-group">
    <label for="adresse">ville:</label>
    <input type="text" class="form-control" id="adress" v-model="ville">
  </div>
  <div class="form-group">
    <label for="adresse">Code postale:</label>
    <input type="number" class="form-control" id="adress" v-model="code">
  </div>
  <div class="form-group">
    <label for="contact">Contact:</label>
    <input type="text" class="form-control" id="contact" v-model="contact">
  </div>
  <div class="form-group">
    <label for="secteur">Secteur:</label>
    <input type="text" class="form-control" id="secteur" v-model="Secteur">
  </div>
  
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, rue, ville, code, contact, Secteur)">Submit</button>
</form>
	</div>
</template>
<script>

import ClientService from "../services/ClientService.vue"
export default {
  name: 'CreateProjet',
  data () {
    return {
      // la table erreurs affiche les erreurs si l'utilisateur ne rempli pas de case
        errors:[],
    nom:null,
    rue:null,
    ville:null,
    code:null,
    contact:null,
    Secteur:null,
      nom: "",
      rue: "",
      ville: "",
      code:"",
      contact: "",
      Secteur: ""
      
    }
  },
  methods: {
      
    formData: function (nom, rue, ville, code, contact, Secteur){
        if(this.nom && this.contact && this.adresse && this.Secteur) return true;
      this.errors = [];
      if(!this.nom) this.errors.push("Nom required.");
      if(!this.adresse) this.errors.push("adresse required.");
      if(!this.contact) this.errors.push("contact required"); // le message d'erreur
      if(!this.Secteur) this.errors.push("Secteur required.");
           
      ClientService.createClient(nom, rue, ville, code, contact, Secteur)  // appel la fonction dans services pour creer le client
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