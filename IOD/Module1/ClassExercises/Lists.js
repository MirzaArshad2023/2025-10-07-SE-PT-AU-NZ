let students = ["John", "Bill", "smith", "Tom"];
let randomData = ["Mirza", 123, null, false, ""];
console.log(randomData);
randomData.push(true);
console.log(randomData);

let cars = ["Audi", "Mercedes", "Toyota", "BMW"];

let countries = new Array();
countries.push("New Zealand");
countries.unshift("Australia");
countries.unshift("USA");
console.log(countries);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

students.unshift("James");

console.log(students);

console.log(cars);

cars[2] = "Mitsibushi";

console.log(cars);

cars.pop();
cars.shift();
console.log(cars);
let rivers = ["Mississippi", "Amazon", "Nile"];
let lastRiver = rivers.pop(); //Pop will remove the element from end
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]
rivers.shift();
console.log(rivers);

let volcanoes = ["Mount Vesuvius", "Mount Etna", "Mount Fuji"];
let fujiIndex = volcanoes.indexOf("Mount Fuji");
console.log(fujiIndex); // 2 (indexes start at 0)
console.log(volcanoes.indexOf("Mount Etna"));
console.log(volcanoes.indexOf("Mount Albert"));

console.log(countries.length);
