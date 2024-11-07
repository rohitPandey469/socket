const mongoose = require("mongoose");
const { Schema } = mongoose;
const linkSchema = new Schema({
  url: { type: String, required: true },
});
module.exports = mongoose.model('Link', linkSchema)