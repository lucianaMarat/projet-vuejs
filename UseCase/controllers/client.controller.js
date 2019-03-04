
const Client = require('../models/client.model');
const fs = require('fs');


// CREATION DE MES CLIENTS
exports.createClient = function (req, res) {
    let client = new Client(
        {
            nom: req.body.nom,
            adresse:  {
                rue : req.body.adresse.rue,
                ville: req.body.adresse.ville,
                codepostal : req.body.adresse.codepostal
            },
            contact: {
                nom : req.body.contact.nom,
                telephone: req.body.contact.telephone,
                mail: req.body.contact.mail
            },
            secteur: req.body.secteur
        }
        
    );
    client.save( (err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Le client a été créé avec succès ! ");
        }
        res.send(client);
    })
}
// FIN CREATION CLIENTS

// RECUPERATION DE MES CLIENTS
exports.getClient = (req, res) => {
    Client.find( (err, client) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(client);
        }
    });
}

// FIN RECUPERATION  DE MES CLIENTS


// RECUPERATION DES CLIENTS PAR RAPPORT A LEUR NOM
exports.getClientByNom = (req, res) => {

    Client.findOne({nom : req.params.nom}, (err, client) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(client);
        }
    });
}


// FIN RECUPERATION DES CLIENTS PAR RAPPORT A LEUR NOM


// MODIFICATION DES CLIENTS


exports.updateClient = (req, res) => {
    Client.findOneAndUpdate({nom : req.params.nom}, req.body, function (err, client) {
        if(err){
            console.log(err);
        } else {
            console.log("Le client a été modifié avec succès !");
        }
        // Pour retourner le client mis a jour 
       res.send(client);
    })
}

// FIN MODIFICATION DES CLIENTS

//SUPPRESSION DES CLIENTS

exports.deleteClient = function(req,res){
    Client.findOneAndRemove({nom : req.params.nom}, function (err) {
        if(err) return (err);
        res.send('Le client a été supprimé avec succès !');
    })
}

// FIN SUPPRESSION DES CLIENTS


// SUPPRESSION DES CLIENTS SELON PLUSIEURS CRITERES ( NOM, SECTEUR )
exports.deleteManyClient = function (req,res) {
	Client.deleteMany({ nom : req.params.nom, secteur : req.params.secteur }, function (err) {
		if(err) return (err);
		res.send (' Le client a été supprimé avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son secteur !  ');
	});
}

// FIN SUPPRESSION DES CLIENTS SELONS PLUSIEURS CRITERES ( NOM, SECTEUR)


// MODIFICATION DES CLIENTS SELONS PLUSIEURS CRITERES ( NOM, SECTEUR)
exports.updateManyClient = (req, res) => {
    Client.updateMany({nom : req.params.nom, secteur : req.params.secteur }, req.body, function (err, client) {
        if(err){
            console.log(err);
        } else {
            console.log(" Le client a été modifié  avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son statut ");
        }
        // Pour retourner le client  mis à jour
       res.send(client);
    })
}

// FIN MODIFICATION DES CLIENTS SELONS PLUSIEURS CRITERES ( NOM, SECTEUR)


