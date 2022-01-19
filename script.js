"use strict";

var button1 = document.getElementById("purple1");
var button2 = document.getElementById("purple2");
var button3 = document.getElementById("blue1");
var button4 = document.getElementById("blue2");

var tekstas1 = document.getElementById("firstP");
var tekstas2 = document.getElementById("secondP");
var tekstas3 = document.getElementById("thirdP");
var tekstas4 = document.getElementById("fourthP");

var clicked = false;

// Pirmas mygutkas
button1.addEventListener("click", function() {
if(!clicked) {
  tekstas1.classList.add("pEffect");
  tekstas1.innerText = 'Hmmm.. this game is sooo good!';
  tekstas1.classList.add("pImage");
  clicked = true;
} else {
  tekstas1.innerText = '';
  tekstas1.classList.remove("pEffect");
  tekstas1.classList.remove("pImage");
  clicked = false;
}
});

// Antras mygtukas
button2.addEventListener("click", function() {
if(!clicked) {
  tekstas2.classList.add("pEffect");
  tekstas2.innerText = 'I beat this game in all modes!';
  tekstas2.classList.add("pImage2");
  clicked = true;
} else {
  tekstas2.classList.remove("pEffect");
  tekstas2.innerText = '';
  tekstas2.classList.remove("pImage2");
  clicked = false;
}
});

//Trecias mygtukas
button3.addEventListener("click", function() {
if(!clicked) {
  tekstas3.classList.add("pEffect");
  tekstas3.innerText = 'Strategies are victories!';
  tekstas3.classList.add("pImage3");
  clicked = true;
} else {
  tekstas3.classList.remove("pEffect");
  tekstas3.innerText = '';
  tekstas3.classList.remove("pImage3");
  clicked = false;
}
});

//Ketvirtas mygtukas
button4.addEventListener("click", function() {
if(!clicked) {
  tekstas4.classList.add("pEffect");
  tekstas4.innerText = 'Real minners come here!';
  tekstas4.classList.add("pImage4");
  clicked = true;
} else {
  tekstas4.classList.remove("pEffect");
  tekstas4.innerText = '';
  tekstas4.classList.remove("pImage4");
  clicked = false;
}
});
