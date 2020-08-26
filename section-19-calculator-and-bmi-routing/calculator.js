//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    function multiply(a, b) {
        return a * b;
    }

    function additon(a, b) {
        return a + b;
    }

    function calculate(a, b, operator) {
        return operator(a, b);
    }

    var calculation = calculate(num1, num2, multiply);

    res.send("The result is " + calculation + ".");
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi + ".");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});