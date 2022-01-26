//Declarando variables

document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);
document.querySelector(".box3").addEventListener("click", box_selected3);
document.querySelector(".box4").addEventListener("click", box_selected4);
document.querySelector(".box5").addEventListener("click", box_selected5);

//box1

value_box = 0;

box1 = document.querySelector(".box1");

//box2

box2 = document.querySelector(".box2");

//box3

box3 = document.querySelector(".box3");

//box4

box4 = document.querySelector(".box4");

//box5

box5 = document.querySelector(".box5");

function box_selected1 () {
    value_box = 1;
    window.location = "/ajax/1eraño.html";
}

function box_selected2 () {
    value_box = 2;
    //window.location = "";
}

function box_selected3 () {
    value_box = 3;
    //window.location = "";
}

function box_selected4 () {
    value_box = 4;
    //window.location = "";
}

function box_selected5 () {
    value_box = 5;
    //window.location = "";
}