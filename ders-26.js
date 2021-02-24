//PROTYPE - prototip tabanlı kalıtım

class People {
  weight;
  kilo;
  talks() {}
  loop() {}
  eat() {}
}

class Teacher {
  weight;
  kilo;
  specialization;
  talks() {}
  loop() {}
  eat() {}
  givesLes() {}
}

// bunun yerine
class Teacher extends People {
  //extends dendiğinde diğer özellikler People Class'ından otomatik olarak kazanılıyor zaten
  specialization;
  givesLes() {}
}

var object = new Teacher();
object.givesLes();
object.specialization;
// People klasındaki herşeyi alıyor
object.weight;
object.kilo;
object.loop();
object.talks();
object.eat();

//PROTOTIP TABANLI KALITIM //  ES5

function People() {}

People.prototype.talks = function () {};

People.prototype.loop = function () {};

function Teacher() {}

Teacher.prototype = Object.create(People.prototype); // insan prototipini al öğretmene ver
Teacher.prototype.constructor = Teacher; // prototype alırken bozulan constructor'u yerine koy diye bu da yazılıyor

/** ******** */
// YENİ VE DOĞRU KALITIM YÖNTEMİ İSE bug'a açık değil ve okurması kolay
class People {
  constructor() {}
  talks() {}
  loop() {
    console.log("Walk");
  }
}

class Teacher extends People {
  constructor() {
    super();
  }
  givesLes() {}
  loop() {
    super.loop();
    console.log("walk in the class");
  }
}

new Teacher().loop(); // Walk  // Walk in the class
