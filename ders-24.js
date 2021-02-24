// Object Oriented Programming // OOP - Nesne Yönelimli Programlama
//proporties -- static - hight width
//function -- dynamic - talking enz.

// two objects
var fatih = {
  name: "Fatih",
  surname: "Ugur",
  age: 45,
  speak: function () {
    alert("Hello friends");
  },
};

var yavuz = {
  name: "Salih Yavuz",
  surname: "Ugur",
  age: 6,
  speak: function () {
    alert("Hello friends!");
  },
};

fatih.name;
fatih.speak();

//CLASS TASNİF

function People(name, surname, age) {
  var x = 10; // private
  var y = function () {
    // private
    console.log("Hello friends!" + x);
  };
  return {
    name: name,
    surname: surname,
    age: age,
    speak: function () {
      y();
      alert("Hello friends!" + x);
    },
  };
}

var fatih = new People("Fatih", "Ugur", 45);
var yavuz = new People("Salih Yavuz", "Ugur", 6);

fatih(); // {name: "Fatih", surname: "Ugur", age: 45, speak: ƒ}
yavuz(); // {name: "Salih Yavuz", surname: "Ugur", age: 6, speak: ƒ}

//private // protected

//private example with  var x = 10;
fatih.speak(); // Hello Friends!10
