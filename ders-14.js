//FUNCTION

// f(x) = 2x +5
// f(3) = ?
// f(3) = 2.3 +5
// f(3) = 11

function f(x){
    var islem = 2*x;
    var islem2 = islem+5;
return islem2 ;
}

function f(x){
    return 2* x +5;
}
//iki return olmaz ama bir returnden birden fazla çıktı talep edilebilir
function g(x){
    return [2*x +5, 3x];
}

//prosedurel (procedural)
function sayHello(){
    console.log("Hello");
    console.log("How are you?");
}

// f(x) = 2x +5
// g(x) = 3x
// f o g(3) = ?
// f(g(3)) =
// g(3) = 9 
//f(9)= 23 // f o g o f (3) //sorusu

function f(x){
    return 2 * x + 5;
}
function g(x){
    return 3 * x;
}

var f = function (x) { return 2 * x + 5; }
 




//boolean // float / string / function