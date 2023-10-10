const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  isNew: { type: Boolean, required: true },
  newPrice: { type: String, required: true },
  oldPrice: { type: String, required: false },
  categories: { type: Array, required: true },
  subCategories: { type: Array, required: true },
  types: { type: String, required: true },

});


module.exports = mongoose.model('products',productSchema);