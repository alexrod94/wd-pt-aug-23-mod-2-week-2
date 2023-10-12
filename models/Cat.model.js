// This is where we create the model
const mongoose = require("mongoose");

// Mongo Schemas are created in three steps
// Step 1: Initializing a Schema
const Schema = mongoose.Schema;

// Step 2: Creating the structure
const catSchema = new Schema({
  name: String,
  legs: Number,
  domesticated: Boolean,
});

// Step 3: Using the structure to create a model (which has all the fancy methods)
const Cat = mongoose.model("Cat", catSchema);

// We export the model so we can use it in different files
module.exports = Cat;
