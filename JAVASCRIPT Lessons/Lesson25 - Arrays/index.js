// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

// console.log(fruits);

// fruits[3] = "coconut"; 

// fruits.push("coconut"); add an element to the ending
// fruits.pop(); remove an element to the ending
// fruits.unshift("mango"); add an element to the beginning
// fruits.shift(); remove an element to the beginning

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("melon");

// for(let i = 1; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// for(let i = fruits.length - 1; i >= 0;  i--){
//     console.log(fruits[i]);
// }

// fruits.sort();
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}



