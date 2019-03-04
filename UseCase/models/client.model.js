const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
		nom: String,
	adresse: {
		rue: String,
		ville : String,
		codepostal : Number
	},
	contact: {
		nom : String,
		telephone : Number,
		mail : String
	},
	Secteur: String
})

module.exports = mongoose.model('Client', ClientSchema);
