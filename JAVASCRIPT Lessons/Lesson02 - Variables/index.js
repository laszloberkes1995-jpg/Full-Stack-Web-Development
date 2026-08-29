// variable = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assigment      x = 100;

// let x;
// x = 123;

// let x = 123;

// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// let firstname = "Laszlo";
// let favouriteFood = "Pizza";
// let email = "djlaselo95@gmail.com";

// console.log(typeof firstname);
// console.log(`Your name is ${firstname}`);
// console.log(`You like ${favouriteFood}`)
// console.log(`Your email is ${email}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`);

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(typeof online);
// console.log(`Laszlo is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

let fullName = "Laszlo Berkes";
let age = 31;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;