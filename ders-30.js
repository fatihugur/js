$("body").html("hello!"); // hatalı html tag yazdık debug örneği için
/*
hata okuma- js:2 ikinci satırda demek burda hepsi çünkü min.js tek satır, birinci satırda da comment var.

Uncaught Error: Syntax error, unrecognized expression: body!
    at Function.oe.error (jquery-3.3.1.slim.min.js:2)
    at oe.tokenize (jquery-3.3.1.slim.min.js:2)
    at oe.select (jquery-3.3.1.slim.min.js:2)
    at Function.oe [as find] (jquery-3.3.1.slim.min.js:2)
    at w.fn.init.find (jquery-3.3.1.slim.min.js:2)
    at new w.fn.init (jquery-3.3.1.slim.min.js:2)
    at w (jquery-3.3.1.slim.min.js:2)
    at ders-30.js:1
*/

// function hello() {
//   throw new Error("Hey!");
// }
// hello();

function hello1() {
  $("body").html("Hello!");
  try {
    throw new Error("Hey!");
  } catch (e) {}

  $("body").html("End!");
}

hello1();
