//EVENTS
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
  alert(1);
});
btn.addEventListener("click", function () {
  alert(2);
});

//FUNCTIONS OVER - FUNCTIONS OUT

function over(e) {
  e.target.style.backgroundColor = "red";
}

function out(e) {
  e.target.style.backgroundColor = "";
}

// btn
btn.addEventListener("mouseover", over);
btn.addEventListener("mouseout", out);

// btn 2

btn2.addEventListener("mouseover", over);
btn2.addEventListener("mouseout", out);
