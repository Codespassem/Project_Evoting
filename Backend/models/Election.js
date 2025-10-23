const mongoose = require('mongoose');

const ElectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }]
}, { timestamps: true });

module.exports = mongoose.model('Election', ElectionSchema);
