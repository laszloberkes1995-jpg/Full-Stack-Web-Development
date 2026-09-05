// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

// const Person = {
//     fullname: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate","jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(Person.fullname);
// console.log(Person.age);
// console.log(Person.isStudent);
// console.log(Person.hobbies[0]);
// console.log(Person.hobbies[1]);
// console.log(Person.hobbies[2]);
// console.log(Person.address.street);
// console.log(Person.address.city);
// console.log(Person.address.country);

// for(const property in Person.address){
//     console.log(Person.address[property]);
// }

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St",
                                            "Bikini Bottom",
                                            "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St",
                                            "Bikini Bottom",
                                            "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St",
                                            "Bikini Bottom",
                                            "Int. Waters");

console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
