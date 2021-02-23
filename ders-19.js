//PRIMITIV DATA TYPES -
Boolean; // true // false  // 0 1
null; // iets in RAM but wrong
undefined; // Nothing in RAM
Number; // numbers -- int and float are in Java not in JS
String; // Alphabeticly alles
Symbol; // (ECMAScript 6)
object; //

// https://developer.mozilla.org/tr/docs/Web/JavaScript
// STRING  //
("JavaScript"); // prototype
"JavaScript".anchor(); // çapa
"JavaScript".big(); //
"JavaScript".charAt(4); //character index
"JavaScript".charCodeAt(5); // code of 5th letter character
String.fromCharCode(32); // = " "
"JavaScript".concat(" is goed"); // concat - birleştirme
"JavaScript".endsWith("Script"); // end with
"JavaScript".includes("ript"); // includes or not
"JavaScript".indexOF("Script"); // right begin
"JavaScript".lastIndexOf("Script"); // left begin
"fatih".localeCompare("ugur", "tr"); // compare plaats // nerede olduğunu karşılaştırma
'JS'.padEnd(10) // js ile başla 10 karakter git
'JS'.padStart(10) // 10 karakter ver JS ile bitir
'JS'.repeat(10) // on kez tekrarla
'Javascript'.replace('Java', 'ECMA'); //replace java with ECMA- değiştir- yerine koy
'JavaScript'.search(/Script/);
'JavaScript'.slice(0,4) // take to 4 // java // oraya kadar al
'JavaScript'.split(''); // split to letter  // ['j', 'a', 'v', 'a', 's', 'c', 'r','i', 'p', 't']
'JavaScript and Ruby'.split (' and '); // ['Javascript', 'Ruby'] // ayır-hecele
'JavaScript and Ruby'.startsWith('JavaScript'); //  true- // begin with ()

'JavaScript and Ruby'.substr(0,10)  // begin 0 tot 10
'JavaScript and Ruby'.substr(4,10)  // Script an... // 
'JavaScript and Ruby'.substring(4,10) // Script // where end is important
'fatih'.toUpperCase() // "FATIH"
'fatih'.toLocaleUpperCase('tr') // "FATİH"
'FATİH'.toLowerCase() // "fatih"
'FATİH'.toLocaleLowerCase('tr') // "fatih"

2.toString() // "2"
"   Javacsript ".trim()
"   Javacsript ".trimleft()

"   Javacsript ".trimright()

// NUMBER

//Infinity 10/0

Number.isFinite(10/0) // false - sonsuz mu
Number.isFinite(10,1) // true
parseInt('fatih') // NaN
Number.parseFloat('1.2'); // 1.2
Number.parseInt('1.2'); //  1 tam sayı
(2).toExponential(); //  "2e+0"//bilimsel ifade ile yazım
1e6 // 1000000/ bir milyon
(2).toFixed(2): // "2.00"

