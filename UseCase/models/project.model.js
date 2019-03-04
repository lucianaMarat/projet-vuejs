const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
	name: String,
	description: String,
	debut: Date,
	fin: Date,
	montant: Number,
	statut: String
})

module.exports = mongoose.model('Project', ProjectSchema);
