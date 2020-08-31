const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Yummy fruit"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 10,
    review: "Best fruit"
});

pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 6,
    review: "Weird texture"
});

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Kinda sour"
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Great stuff"
});

const peach = new Fruit({
    name: "Peach",
    rating: 7,
    review: "Mmmh"
});

Fruit.insertMany([kiwi, orange, banana, peach], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

Fruit.updateOne({ name: "Peach" }, { rating: 10 }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document");
    }
});

Person.deleteMany({ name: "Banana" }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the document");
    }
});