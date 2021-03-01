//EVENTS
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
  alert(1);
});
btn.addEventListener("click", function () {
  alert(2);
});

btn.addEventListener("mouseover", function (e) {
  console.log(e);
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseout", function (e) {
  console.log(e);
  btn.style.backgroundColor = "";
});

// btn 2

btn2.addEventListener("mouseover", function (e) {
  console.log(e);
  btn2.style.backgroundColor = "red";
});

btn2.addEventListener("mouseout", function (e) {
  btn2.style.backgroundColor = "";
});
