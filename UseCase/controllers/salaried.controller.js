const Salaried = require('../models/salaried.model');
const fs = require('fs');


// CREATION DE MES SALARIES 
exports.createSalaried = function (req, res) {
    let salaried = new Salaried(
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            username: req.body.username,
            naissance: req.body.naissance,
            adresse:  {
                rue : req.body.adresse.rue,
                ville: req.body.adresse.ville,
                codepostal : req.body.adresse.codepostal
            },
            telephone: req.body.telephone,
            mail: req.body.mail,
            poste: req.body.poste

        }
    );
    salaried.save( (err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Le salarié a été créé avec succès ! ");
        }
        res.send(salaried);
    })
}
// FIN CREATION DES SALARIES

// RECUPERATION DE MES SALARIES
exports.getSalaried = (req, res) => {
    Salaried.find( (err, salaried) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(salaried);
        }
    });
}

// FIN RECUPERATION  DE MES SALARIES


// RECUPERATION DES SALARIES PAR RAPPORT A LEUR NOM
exports.getSalariedByNom = (req, res) => {

    Salaried.findOne({nom : req.params.nom}, (err, salaried) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(salaried);
        }
    });
}


// FIN RECUPERATION DES SALARIES PAR RAPPORT A LEUR NOM


// MODIFICATION DES SALARIES


exports.updateSalaried = (req, res) => {
    Salaried.findOneAndUpdate({nom : req.params.nom}, req.body, function (err, salaried) {
        if(err){
            console.log(err);
        } else {
            console.log("Le salarié a été modifié avec succès !");
        }
        // Pour retourner le salarié mis a jour 
       res.send(salaried);
    })
}

// FIN MODIFICATION DES SALARIES

//SUPPRESSION DES SALARIES

exports.deleteSalaried = function(req,res){
    Salaried.findOneAndRemove({nom : req.params.nom}, function (err) {
        if(err) return (err);
        res.send('Le salarié a été supprimé avec succès !');
    })
}

// FIN SUPPRESSION DES SALARIES


// SUPPRESSION DES SALARIES SELON PLUSIEURS CRITERES ( NOM, PRENOM)
exports.deleteManySalaried = function (req,res) {
	Salaried.deleteMany({ nom : req.params.nom, prenom : req.params.prenom }, function (err) {
		if(err) return (err);
		res.send (' Le salarié a été supprimé avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son prenom !  ');
	});
}

// FIN SUPPRESSION DES SALARIES SELONS PLUSIEURS CRITERES ( NOM, PRENOM)


// MODIFICATION DES SALARIES SELONS PLUSIEURS CRITERES ( NOM, PRENOM)
exports.updateManySalaried = (req, res) => {
    Salaried.updateMany({nom : req.params.nom, prenom : req.params.prenom }, req.body, function (err, salaried) {
        if(err){
            console.log(err);
        } else {
            console.log(" Le salarié  a été modifié  avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son statut ");
        }
        // Pour retourner le salarié  mis à jour
       res.send(salaried);
    })
}

// FIN MODIFICATION DES SALARIES SELONS PLUSIEURS CRITERES ( NOM, PRENOM)


