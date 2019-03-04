const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalariedSchema = new Schema({
		nom: String,
	prenom: String,
	username: String,
	naissance: Date,
	adresse: {
		rue: String,
		ville : String,
		codepostal : Number
	},
	telephone: Number,
	mail: String,
	poste: String
})

module.exports = mongoose.model('Salaried', SalariedSchema);
















