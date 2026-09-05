// destructuring = extract values from arrays and object,
//                 then assign them to variables in a conventient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples


// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red","green","blue","black","white"];

// [colors[0],colors[4]] = [colors[4],colors[0]];

// console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES


// const colors = ["red","green","blue","black","white"];

// const [firstColor, secondColor, thirdColor, ...extracolors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extracolors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// }
// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job="unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ---------- EXAMPLE 5 ----------
// DESCTRUCTURE IN FUNCTION PARAMATERS

function displayPerson({firstName,lastName,age,job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);






