//FUNCTION

console.log("Fatih");
console.log("Ugur");

function name() {
  console.log("Fatih");
  console.log("Ugur");
} // prosedür

name(); //fonksiyonu çağırırız

function f() {
  var x = 2;
  var y = 5;
  return x + y; // 7
}
var a = f2();
console.log(a); // 7 --> çünkü fonksiyon içindeki return 7

function f2() {
  var x = 2;
  var y = 5;
  //return [x + y, 1]; --> // [7, 1] //array return
  return { x: x, y: y }; // object return {x: 2, y: 5}
}
var b = f2();
console.log(b); // return --> [7, 1] or  {x: 2, y: 5}

//FUNCTION -DYNAMIC FUNCTION

function f2(x, y) {
  return x + y;
}
var b = f2(5, 2);
console.log(b); // return --> 7

//arguments in function

function som() {
  //console.log(arguments);
  //"Array-like"-- array gibi - dizi gibi
  var numbers = Array.from(arguments); // [2, 3, 4, 10, 20]
  return numbers.reduce((x, y) => x + y, 0);
}

// function som( ...numbers){

// }

var result = som(2, 3, 4); //Arguments(3) [2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
var result2 = som(2, 3, 4, 10, 20); // Arguments(5) [2, 3, 4, 10, 20, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//
// new function syntax // ECMASCRPIPT 6 -
function f(x, ...y) {
  return [x, y];
}
f(3, 4, 5, 6, 7);

/*(2) [3, Array(4)]
    0: 3
    1: (4) [4, 5, 6, 7]
    length: 2
    __proto__: Array(0)

    */

//SUM FUNCTION  // OLD JAVACSRIPT

function sum() {
  var numbers = Array.from(arguments);
  return numbers.reduce(function (x, y) {
    return x + y;
  }, 0);
}
sum();

//SUM FUNCTION  // ECMA- 6  --- 1
function sum(...numbers) {
  return numbers.reduce((x, y) => x + y, 0);
}
sum();

//SUM FUNCTION  // ECMA - 6 ---2
const sum = (...numbers) => numbers.reduce((x, y) => x + y, 0);
sum();

/////////////////

function sum(x, y, z) {
  return x + y + z;
}
sum(3, 4, 5);
// sum(3)

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

var a = function (x) {
  return x + 5;
};

const a = (x) => {
  return x + 5;
};

const sum = (x) => (y) => (z) => x + y + z;
