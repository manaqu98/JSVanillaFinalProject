//Declarando variables

document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);
document.querySelector(".box3").addEventListener("click", box_selected3);

//box1

value_box = 0;

box1 = document.querySelector(".box1");

//box2

box2 = document.querySelector(".box2");

//box3

box3 = document.querySelector(".box3");

function box_selected1 () {
    value_box = 1;
    window.location = "/ajax/1roa.html";
}

function box_selected2 () {
    value_box = 2;
    //window.location = "";
}

function box_selected3 () {
    value_box = 3;
    //window.location = "";
}