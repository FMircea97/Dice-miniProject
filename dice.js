var images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
var imgLength = images.length;

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * imgLength;
randomNumber1 = Math.floor(randomNumber1);
var randomImage1 = images[randomNumber1];
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src", randomImage1);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * imgLength;
randomNumber2 = Math.floor(randomNumber2);
randomImage2 = images[randomNumber2];

document.querySelector(".img2").setAttribute("src", randomImage2);

var newName = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  newName.innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  newName.innerHTML = "Player 1 Win";
} else {
  newName.innerHTML = "Player 2 Win";
}
