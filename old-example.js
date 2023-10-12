// mongoose

/*
- Create
- Read
- Update
- Delete
*/

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/international-ironhack")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.log(err));

const Cat = mongoose.model("Cat", {
  name: String,
  legs: Number,
  domesticated: Boolean,
});

/*const kitty = new Cat({
  name: "Second kitty",
  legs: 5,
  domesticated: "whatever",
});

kitty
  .save()
  .then((x) => console.log(x))
  .catch((err) => console.log(err));

  */

Cat.find()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
