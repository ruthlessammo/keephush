const mongoose = require('mongoose');

const programmesSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Programme', programmesSchema);
