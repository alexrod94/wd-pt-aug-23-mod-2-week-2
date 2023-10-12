const mongoose = require("mongoose");
const Cat = require("./models/Cat.model");
const Dog = require("./models/Dog.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/international-ironhack")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.log(err));

function addNewCat() {
  // Get the data for a new cat
  const newCat = {
    legs: 4,
    domesticated: false,
  };

  // Use the model to create a new cat
  Cat.create(newCat)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function findCat(id) {
  Cat.findById(id)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

function addNewDog() {
  const newDog = {
    color: "brown",
    age: 4,
  };
  Dog.create(newDog)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
