
const Project = require('../models/project.model');
const fs = require('fs');


// CREATION DE MES PROJETS
exports.createProject = function (req, res) {
    let project = new Project(
        {
            name: req.body.name,
            description: req.body.description,
            debut: req.body.debut,
            fin: req.body.fin,
            montant: req.body.montant,
            statut: req.body.statut
        }
    );
    project.save( (err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Le projet a été créé avec succès ! ");
        }
        res.send(project);
    })
}
// FIN CREATION PROJECT

// RECUPERATION DE MES PROJETS
exports.getProject = (req, res) => {
    Project.find( (err, project) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(project);
        }
    });
}

// FIN RECUPERATION  DE MES PROJECTS


// RECUPERATION DES PROJECTS PAR RAPPORT A LEUR NOM
exports.getProjectByNom = (req, res) => {

    Project.findOne({name : req.params.name}, (err, project) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(project);
        }
    });
}


// FIN RECUPERATION DES PROJECTS PAR RAPPORT A LEUR NOM


// MODIFICATION DES PROJETS


exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({name: req.params.name}, req.body, function (err, project) {
        if(err){
            console.log(err);
        } else {
            console.log("Le projet a été modifié avec succès !");
        }
        // Pour retourner le projet mis a jour 
       res.send(project);
    })
}

// FIN MODIFICATION DES PROJECTS

//SUPPRESSION DES PROJETS

exports.deleteProject = function(req,res){
    Project.findByIdAndRemove({name : req.params.name}, function (err) {
          if(err) return (err);
        res.send('Le projet a été supprimé avec succès !');
    })
}

// FIN SUPPRESSION DES PROJETS


// SUPPRESSION DES PROJETS SELON PLUSIEURS CRITERES ( NOM, STATUT)
exports.deleteManyProject = function (req,res) {
	Project.deleteMany({ name : req.params.name, statut : req.params.statut }, function (err) {
		if(err) return (err);
		res.send (' Le projet a été supprimé avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son statut !  ');
	});
}

// FIN SUPPRESSION DES PROJETS SELONS PLUSIEURS CRITERES ( NOM, STATUT)


// MODIFICATION DES PROJECTS SELONS PLUSIEURS CRITERES ( NOM, STATUT)
exports.updateManyProject = (req, res) => {
    Project.updateMany({name : req.params.name, statut : req.params.statut }, req.body, function (err, project) {
        if(err){
            console.log(err);
        } else {
            console.log(" Le projet a été modifié  avec succès selons les criteres que vous avez entré ! Cest a dire son nom et son statut ");
        }
        // Pour retourner le projet  mis à jour
       res.send(project);
    })
}

// FIN MODIFICATION DES PROJETS SELONS PLUSIEURS CRITERES ( NOM, STATUT)


