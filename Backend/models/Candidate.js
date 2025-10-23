const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  election: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
  partyName: { type: String }, // optional
  votesCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', CandidateSchema);
