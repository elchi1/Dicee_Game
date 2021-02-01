// First dicee  - Первый куб

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; // number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1 - dice6

// var randomImageSource = "images/" + randomDiceImage; я хранил фотографии в отдельной папке, поэтому для удобвства сделал так

var image1 = document.querySelectorAll("img")[0]; // выбираем файл из атрибута img и выбираем первый элемент

image1.setAttribute("src", randomDiceImage); // выбираем где и что нам нужно изменить, где = src, что = наша рандомная фотка


// Second dicee  - Второй куб - Здесь аналогичная ситуация как и с первым кубом

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
