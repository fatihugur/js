//OBJECT
var newObject = {
  name: "Fatih",
  surname: "Ugur",
  age: 44,
};
fullName = newObject.name + newObject.surname;
infoPerson = fullName + " is " + newObject.age + "year olds.";

Object.keys(newObject); // ['name', 'surname', 'age']
Object.values(newObject); // ['Fatih', 'Ugur', 44]
//OBJECT HAS TWO SIDES- KEYS AND VALUES

var newObjectOne = {
  hello: function () {
    return 1;
  },
};
newObjectOne.hello(); // 1

//JavaScriptObjectNotation (JSON)  // xml format. data
var newObject = {
  name: "Fatih",
  surname: "Ugur",
  age: 44,
  x: [1, 2, 3, 4], //array
  y: function () {}, // function
  z: {
    // another object
    a: 1,
    b: 2,
  },
};
