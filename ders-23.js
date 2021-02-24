//Function usage sorts => // name , anonim , IIFE

//NAMED FUNCTION

function x() {
  return 1;
}

//See at console.log

//NONAME FUNCTION - ANONIM

(function () {
  return 1;
}.name); // return ""

//NAMED FUNCTION

(function fatih() {
  return 1;
}.name); // return "fatih"

//ANONIM FUNCTION -- EXAMPLE

$("#button").on("click", function () {}); // jquery code

// Callback  hell // callbacak cehennemi
$.get("https://google.com", function (response) {
  var title = response.title;
  $.get("https://bing.com?q=" + title, function (response) {
    var title = response,
      title;
    $.get("https://altavista.com?q=" + title, function (response) {
      var title = response.title;
      $.get("https://duckduckgo.com?q=", title, function (response) {
        console.log(response);
      });
    });
  });
});

console.log(1);
var response = $.get("https://google.com");
var title = response.title;

//IIFE - ani fonksiyon çağırmaları

(function () {
  alert(1);
})(); // immedietlay return alert 1

(function () {
  console.log(1);
})(); // return console.log 1
