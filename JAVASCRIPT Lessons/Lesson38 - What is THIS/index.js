// this = reference to oebject where this used
//        (the object depends on immadiate context)
//        person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function() {console.log(`Hi! I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function() {console.log(`Hi! I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}
// person1.sayHello();
// person1.eat();
// person2.eat();

console.log(this);