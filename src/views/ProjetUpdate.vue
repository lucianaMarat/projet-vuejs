<template lang="html">
  <div>
    <h2>  Edit Project</h2>
    <p v-if="errors.length">
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <form  >
  <div class="form-group">
    <label for="nom"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="nom" >
    <button type="button" name="button" class="btn btn-primary" v-on:click="afficher(name), show = !show">Submit</button>
  </div>
  </form >
  <hr>  
 <form v-if="!show">
  <div class="form-group">
    <label for="name"> Name:</label>
    <input type="text" class="form-control" id="name" v-model="name" :placeholder="projets.name">
  </div>
  <div class="form-group">
    <label for="price">Description:</label>
    <input type="text" class="form-control" id="" v-model="description" :placeholder="projets.description">
  </div>
  <div class="form-group">
    <label for="description">Date de debut:</label>
    <input type="date" class="form-control" id="description" v-model="debut" :placeholder="projets.debut">
  </div>
  <div class="form-group">
    <label for="tva">Date de fin:</label>
    <input type="date" class="form-control" id="tva" v-model="fin" :placeholder="projets.fin">
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
  data () {
    return {
      show: true,
       errors:[],
     name: null,
     description: null,
   debut: null,
   fin: null,
   montant: null,
   statut: null,
      projets:[],
     name: "",
     description: "",
	 debut: "",
	 fin: "",
	 montant: "",
	 statut: ""
    }
  },
  methods: {
    afficher:function(name){
      ProjetService.getProject(name)
   .then((data) => {
        this.projets = data;
        console.log(this.projets);
      })
    },

    formData: function (name, description, debut, fin, montant, statut) {
      if(this.name && this.description && this.debut && this.fin && this.montant && this.statut) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Nom required.");
      if(!this.description) this.errors.push("description required.");
      if(!this.debut) this.errors.push("debut required");
      if(!this.fin) this.errors.push("fin required.");
      if(!this.montant) this.errors.push("montant required.");
      if(!this.statut) this.errors.push("statut required.");
        
      ProjetService.EditProject(name, description, debut, fin, montant, statut)
    }
  }
}

</script>

<style lang="css" scoped>
</style>
					