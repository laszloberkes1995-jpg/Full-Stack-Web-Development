const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[4].calories);

// fruits.push({name: "grapes", color: "purple", calories: 62});
// fruits.pop();
// fruits.splice(1, 2); //delete Objects

// console.log(fruits);

// ---------- forEach ----------

// fruits.forEach(fruit => console.log(fruit));

// ---------- map() ----------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitCalories);

// ---------- filter() ----------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
// console.log(highCalFruits);

// ---------- reduce() ----------

const Maxfruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? 
                                                                fruit : max);
const Minfruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? 
                                                                fruit : min);

console.log(Minfruit);