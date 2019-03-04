 <template>
	<div >
    <h2>  Creation Salarie</h2>
<form >
  <div class="form-group">
    <label for=""> Nom:</label>
    <input type="text" class="form-control" id="" v-model="nom">
  </div>
  <div class="form-group">
    <label for="">Prenom:</label>
    <input type="text" class="form-control" id="" v-model="prenom">
  </div>
  <div class="form-group">
    <label for="">username:</label>
    <input type="text" class="form-control" id="" v-model="username">
  </div>
  <div class="form-group">
    <label for="naissance">naissance:</label>
    <input type="date" class="form-control" id="naissance" v-model="naissance">
  </div>
  <div class="form-group">
    <label >rue:</label>
    <input type="text" class="form-control" id="" v-model="rue">
  </div>
  <div class="form-group">
    <label >ville:</label>
    <input type="text" class="form-control" id="" v-model="ville">
  </div>
  <div class="form-group">
    <label >code postal:</label>
    <input type="text" class="form-control" id="" v-model="code">
  </div>
  <div class="form-group">
    <label >telephone:</label>
    <input type="number" class="form-control" id="" v-model="telephone">
  </div>
   <div class="form-group">
    <label for="mail">mail:</label>
    <input type="Email" class="form-control" id="mail" v-model="mail">
  </div>
   <div class="form-group">
    <label for="poste">poste:</label>
    <input type="text" class="form-control" id="poste" v-model="poste">
  </div>
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, prenom, username, naissance, rue, ville, code, telephone, mail, poste)">Submit</button>
</form>
	</div>
</template>
<script>

import SalarieService from "../services/SalarieService.vue"
export default {
  name: 'CreateSalaries',
  data () {
    return {
             errors:[],
     nom: null,
     prenom: null,
   username: null,
   naissance: null,
   rue: null,
   ville:null,
   code: null,
   adresse: null,
   telephone:null,
   mail:null,
   poste:null,
      nom: "",
      prenom: "",
      username: "",
      naissance: "",
      rue: "",
      ville:"",
      code:"",
      telephone:"",
      mail:"",
      poste: ""
    }
  },
  methods: {
    formData: function (nom, prenom, username, naissance, rue, ville, code, telephone, mail, poste){
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
        
      SalarieService.createSalaries(nom, prenom, username, naissance,rue, ville, code, telephone, mail, poste)
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