const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "439d4b804bc8187953eb36d2a8c26a02"; // a sample API key, please replace with your apiKey
    //const unit = "metric";
    //const url = "https://samples.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    const url = "https://samples.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather in " + query + " is currently " + weatherDescription + ".</h1>");
            res.write("<h1>The temperature is " + temp + " degrees.</p>");
            res.write("<img src=" + imageURL + ">");
        });
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});