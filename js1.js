//style change through java
const title = document.getElementById("CSS");
title.style.color = "red"
//insert new element using DOM
//var.appendChild(var document.createElement);
//remove element through DOM
var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
var child = document.getElementsByTagName("li")[0];
var remove = parent.removeChild(child);

// onlick event

var content = document.getElementById("content");
var button = document.getElementById("showmore");

button.onclick = function(){

  if (content.className == "open"){
    content.className = "";
    button.innerHTML = "Show More";
  } else{
    content.className = "open";
    button.innerHTML = "Show Less";
  }

};

//ONload Event

function setUpEvent(){

  var content = document.getElementById("content");
var button = document.getElementById("showmore");

button.onclick = function(){

  if (content.className == "open"){
    content.className = "";
    button.innerHTML = "Show More";
  } else{
    content.className = "open";
    button.innerHTML = "Show Less";
  }

};
}
window.onload = function(){

  setUpEvent();
};

//JS timer

var myMessage = document.getElementById("message");

function showMessage(){

myMessage.className = "show";

}

setTimeout(showMessage, 3000);


var colorchanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green","pink"];

var counter = 0;

function changeColours(){

if (counter >= colours.length){
counter = 0;
}

colourChanger.style.background = colours[counter];

counter++;

}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){

clearInterval(myTimer);
colourChanger.innerHTML = "Timer Stopped";

};

