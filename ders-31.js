//Cookies

document.cookie = "";
localStorage.name;
localStorage.setItem("name", "hey");
localStorage.getItem("name");
localStorage.setItem("name", JSON.stringify({ a: 1 }));
localStorage.getItem("name");
JSON.parse(localStorage.getItem("name")); // {a: 1}
