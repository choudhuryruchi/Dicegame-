
var randomnumber1 = Math.floor(Math.random()*6)+1; //generates a ramdom number from 1-6
var randomimage1 = "dice" +randomnumber1 +".png"; // string to select the image
var randomsource1 = "images/" +randomimage1 ; // source of image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource1);

var randomnumber2 = Math.floor(Math.random()*6)+1; //generates a ramdom number from 1-6
var randomimage2 = "dice" +randomnumber2 +".png"; // string to select the image
var randomsource2 = "images/" +randomimage2 ; // source of image
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource2);

if(randomnumber2>randomnumber1)
document.querySelector("h1").innerHTML= "Player 2 wins 🚩";

else if(randomnumber2<randomnumber1)
document.querySelector("h1").innerHTML= "Player 1 wins 🚩";

else
document.querySelector("h1").innerHTML= "Match draw😶!! Refresh me again !";
