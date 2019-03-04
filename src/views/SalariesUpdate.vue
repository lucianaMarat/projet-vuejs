<template lang="html">
  <div>
    <h2>Edit Salarie </h2>
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
    <label for=""> Nom:</label>
    <input type="text" class="form-control" id="" v-model="nom" :placeholder="salarie.nom">
  </div>
  <div class="form-group">
    <label for="">Prenom:</label>
    <input type="text" class="form-control" id="" v-model="prenom" :placeholder="salarie.prenom">
  </div>
  <div class="form-group">
    <label for="">username:</label>
    <input type="text" class="form-control" id="" v-model="username" :placeholder="salarie.username">
  </div>
  <div class="form-group">
    <label for="naissance">naissance:</label>
    <input type="date" class="form-control" id="naissance" v-model="naissance" :placehoder="salarie.naissance">
  </div>
 <div class="form-group">
    <label for="rue" >rue:</label>
    <input type="text" class="form-control" id="rue" v-model="rue" :placeholder="salarie.rue">
  </div>
  <div class="form-group">
    <label for="ville">ville:</label>
    <input type="text" class="form-control" id="" v-model="ville" :placeholder="salarie.ville">
  </div>
  <div class="form-group">
    <label for="code">code postal:</label>
    <input type="number" class="form-control" id="" v-model="code" :placeholder="salarie.code">
  </div>
  <div class="form-group">
    <label >telephone:</label>
    <input type="number" class="form-control" id="" v-model="telephone" :placeholder="salarie.telephone">
  </div>
   <div class="form-group">
    <label for="mail">mail:</label>
    <input type="Email" class="form-control" id="mail" v-model="mail" :placeholder="salarie.mail">
  </div>
   <div class="form-group">
    <label for="poste">poste:</label>
    <input type="text" class="form-control" id="poste" v-model="poste" :placeholder="salarie.poste">
  </div>
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, prenom, username, naissance,rue, ville, code, telephone, mail, poste)">Submit</button>
</form>
</div>
</template>

<script>
import SalarieService from "../services/SalarieService.vue"
export default {
  data () {
    return {
      show: true,
                  errors:[],
     nom: null,
     prenom: null,
   username: null,
   naissance: null,
  rue: null,
      ville:null,
      code:null,
   telephone:null,
   mail:null,
   poste:null,
      salarie:[],
       nom: "",
     prenom: "",
   username: "",
   naissance: "",
   rue: "",
      ville:"",
      code:"",
   adresse: "",
   telephone:"",
   mail:"",
   poste:"",
    }
  },
  methods: {
       afficher:function(nom){
      SalarieService.getSalarie(nom)
   .then((data) => {
        this.salarie = data;
        console.log(this.salarie);
      })
    },

    formData: function (nom, prenom, username, naissance,rue, ville, code, telephone, mail, poste) {
       if(this.name && this.prenom && this.username && this.naissance && this.rue && this.telephone && this.mail && this.poste) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Nom required.");
      if(!this.prenom) this.errors.push("prenom required.");
      if(!this.username) this.errors.push("username required");
      if(!this.naissance) this.errors.push("naissance required.");
      if(!this.rue) this.errors.push("adresse required.");
      if(!this.telephone) this.errors.push("telephone required.");
      if(!this.mail) this.errors.push("mail required.");
      if(!this.poste) this.errors.push("poste required.");
      SalarieService.EditSalaries(nom)
    }
  }
}
</script>

<style lang="css" scoped>
</style>