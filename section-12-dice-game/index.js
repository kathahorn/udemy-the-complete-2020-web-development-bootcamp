
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

var title = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins!";
}