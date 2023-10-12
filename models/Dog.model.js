const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
  age: Number,
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
