const express = require("express");
const bodyParser = require("body-parser");
const moment = require('moment');

moment.locale('en');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", function (req, res) {
    let weekday = moment().format('dddd, MMMM D');

    res.render("list", {
        kindOfDay: weekday,
        newListItems: items
    });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (item != "") {
        items.push(item);

        res.redirect("/");
    } else {
        res.redirect("/");
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});