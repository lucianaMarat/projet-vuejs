<template>
   
   <div class="col-md">

    <center><h2>edit un client</h2></center>
<Navbar/>
<p v-if="errors.length">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
<form  >
  <div class="form-group">
    <label for="nom"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="nom" >
    <button type="button" name="button" class="btn btn-primary" v-on:click="afficher(nom), show = !show">Submit</button>
  </div>
  </form >
  <hr>  
 <form v-if="!show">
  <div class="form-group">
    <label for="nom"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="nom" :placeholder="client.nom">
  </div>
  <div class="form-group">
    <label for="adresse">rue:</label>
    <input type="text" class="form-control" id="adress" v-model="rue" >
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
    <input type="number" class="form-control" id="contact" v-model="contact" :placeholder="client.contact">
  </div>
  <div class="form-group">
    <label for="secteur">Secteur:</label>
    <input type="text" class="form-control" id="secteur" v-model="Secteur" :placeholder="client.Secteur">
  </div>
  
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, rue, ville, code, contact, Secteur)">Submit</button>
</form>
  </div>

  </div>
</template>
<script >
import ClientService from "../services/ClientService.vue"
  export default {
   
   data() {
    return{
        errors:[],
    nom:null,
    adresse:null,
    contact:null,
    Secteur:null,
      show: true,
    client:'',
       nom: "",
      adresse: "",
      contact: "",
      Secteur: ""
    }
  },
  methods: {
    afficher: function(nom){
        ClientService.getClient(nom)
      .then((data) => {
        this.client = data;
        console.log(this.client);
      })
      .catch(error => {
        console.log(error);
      })
    },
    formData: function (nom) {
         if(this.nom && this.contact && this.rue && this.Secteur) return true;
      this.errors = [];
      if(!this.nom) this.errors.push("Nom required.");
      if(!this.rue) this.errors.push("adresse required.");
      if(!this.contact) this.errors.push("contact required");
      if(!this.Secteur) this.errors.push("Secteur required.");
      ClientService.EditClient(nom)
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
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>