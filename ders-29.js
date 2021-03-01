//EVENTS
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var inp = document.getElementById("inp");

btn.addEventListener("click", function () {
  alert(1);
});
btn.addEventListener("click", function () {
  alert(2);
});

//FUNCTIONS OVER - FUNCTIONS OUT //E TARGET

function over(e) {
  e.target.style.backgroundColor = "red";
}

function out(e) {
  e.target.style.backgroundColor = "";
}
//draggable button
// btn.addEventListener("drag", function (e) {
//   console.log(e);
// });

//dragstar /dragend
btn.addEventListener("dragstart", function (e) {
  console.log(e);
});

btn.addEventListener("dragend", function (e) {
  console.log(e);
});

// btn
btn.addEventListener("mouseover", over);
btn.addEventListener("mouseout", out);

// btn 2

btn2.addEventListener("mouseover", over);
btn2.addEventListener("mouseout", out);

inp.addEventListener("focus", function (e) {
  e.target.value = "Hello";
}); // input içine basıldığında hello yazacak

inp.addEventListener("blur", function (e) {
  e.target.value = "";
}); // input'tan çıktığında hello silinecek

inp.addEventListener("keyup", function (e) {
  e.target.value = e.target.value.toUpperCase();
}); // input içine büyük harflerle yazacak

//developer.mozilla.org- EVENTS
// error - abort - load - beforeunload - unload - online- offline
//focus- blur
// keydown - keypress - keyup
//mouse eventler
//drag & drop
//battery events

//DEVELOPERS TOOL
