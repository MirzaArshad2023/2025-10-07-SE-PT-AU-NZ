let book = {
  Author: "William shakespere",
  "Published date": "1950-01-01",
  Company: "xyz",
};

let userData = {
  firstName: ["Mirza", "Sam", "James"],
  lastName: {
    part1: "james",
    part2: "Same",
  },
  age: 25,
  followers: 1000,
  favouritebook: book,
};

//User information having details.
let userInfo = [
  { firstName: "Shark", lastName: "Shark", age: 25, followers: 1000 },
  { firstName: "Bruce", lastName: "Lee", age: 40, followers: 2000 },
  { firstName: "William", lastName: "ShakesPere", age: 40, followers: 2000 },
];
console.log(userData.favouritebook.Author);

console.log(book.Author);
book["Published date"] = "1930=02-01";

book.Country = "England";

console.log(book);

console.log(userData.firstName);
console.log(userData.lastName);
console.log(userData.age);
console.log(userData.followers);

userData.followers = 1200;
userData["age"] = 30;

console.log(userData);

delete userData.followers;

console.log(userData);
