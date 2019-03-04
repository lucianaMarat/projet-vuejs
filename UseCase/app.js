const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const clientController = require('./controllers/client.controller.js');
const projectController = require('./controllers/project.controller.js');
const salariedController = require('./controllers/salaried.controller.js');


const app = express(); // J'ai utilisé express


app.use(express.urlencoded({extends:true}));
app.use(express.json());

// J'ai connecté  à la base de données mongoose
// BASE DE DONNEES CLIENTS 
mongoose.connect('mongodb://client:client1@ds155845.mlab.com:55845/projet', (err) =>{
    if(err){
        console.log('La base de données clients nest pas connectée ');
    }
    else
    {
        console.log('La base de données clients  est connectée !');

app.post("/accueil/client/creationclient", clientController.createClient ); // creer un client
app.get("/accueil/client/listeclient", clientController.getClient ); // acceder à tous les clients
app.get("/accueil/client/:nom", clientController.getClientByNom ); // afficher les details d'un client par rapport à son nom 
app.post("/accueil/client/updateclient/:nom", clientController.updateClient ); //modifier un client après avoir entré son nom
app.get('/accueil/client/deleteclient/:nom', clientController.deleteClient);  // suprimmer un client
app.delete('/accueil/client/deletemanyclient/:nom/:secteur', clientController.deleteManyClient);  // suprimmer un client par rapport a plusieurs caractéristiques avec son nom et secteur 
app.post("/accueil/client/updatemanyclient/:nom/:secteur", clientController.updateManyClient ); // mettre à jour un client par rapport a plusieurs caractéristiques avec son nom et secteur

    }
})
 
// FIN BASE DE DONNEES CLIENTS 

// BASE DE DONNEES PROJETS 

mongoose.connect('mongodb://projet:projet1@ds155845.mlab.com:55845/projet', (err) =>{
    if(err){
        console.log('La base de données projet nest pas connectée ');
    }
    else
    {
        console.log('La base de données projet  est connectée !');
        app.post("/accueil/project/creationproject", projectController.createProject ); // creer un projet 
app.get("/accueil/project/listeproject", projectController.getProject ); // acceder à tous les projets
app.get("/accueil/project/:name", projectController.getProjectByNom ); // afficher les details d'un projet par rapport à son nom 
app.post("/accueil/project/updateproject/:name", projectController.updateProject ); //modifier un projet après avoir entré son nom
app.get('/accueil/project/deleteproject/:name', projectController.deleteProject);  // suprimmer un projet
app.delete('/accueil/client/deletemanyproject/:name/:statut', projectController.deleteManyProject);  // suprimmer un projet par rapport a plusieurs caractéristiques avec son nom et statut
app.post("/accueil/client/updatemanyclient/:nom/:statut", projectController.updateManyProject ); // mettre à jour un client par rapport a plusieurs caractéristiques avec son nom et statut

    }
})


// FIN BASE DE DONNES PROJETS 


// BASE DONNEES SALARIES 


mongoose.connect('mongodb://projet:projet1@ds155845.mlab.com:55845/projet', (err) =>{
    if(err){
        console.log('La base de données salariés nest pas connectée ');
    }
    else
    {
        console.log('La base de données salariés  est connectée !');
        app.post("/accueil/salaried/creationsalaried", salariedController.createSalaried ); // creer un salarié
app.get("/accueil/salaried/listesalaried", salariedController.getSalaried ); // acceder à tous les salariés
app.get("/accueil/salaried/:nom", salariedController.getSalariedByNom ); // afficher les details d'un salarié par rapport à son nom 
app.post("/accueil/salaried/updatesalaried/:nom", salariedController.updateSalaried ); //modifier un salarié après avoir entré son nom
app.get('/accueil/salaried/deletesalaried/:nom', salariedController.deleteSalaried);  // suprimmer un salarié
app.delete('/accueil/salaried/deletemanysalaried/:nom/:prenom', salariedController.deleteManySalaried);  // suprimmer un salarié par rapport a plusieurs caractéristiques avec son nom et prenom
app.post("/accueil/salaried/updatemanysalaried/:nom/:prenom", salariedController.updateManySalaried); // mettre à jour un salarié par rapport a plusieurs caractéristiques avec son nom et prenom

    }
})

// FIN BASE DONNEES SALARIES 

// Je crée mes routes
app.get("/",(req,res)=>{
	res.send("Désolé,Je ne parviens pas à vous identifier");
})

app.get("/:name",(req,res)=>{
	let nom = req.params.name;
	res.send("Bonjour "+ nom +", Bienvenue sur votre API de gestion de catalogue produit.");
})

// Je sécurise
app.use(function(req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.setHeader('Accept', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, Authorization, Access-Control-Allow-Origin');
	next();

});
// Fin sécurisation










// Je lance le serveur
app.listen(3000, ()=> {
	console.log("Le serveur est lancé !")
});
