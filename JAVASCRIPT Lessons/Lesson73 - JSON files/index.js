// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = convert a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 34,"isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy","age": 27,"isEmployed": false}]`;
// const jsonString = JSON.stringify(names);
// const jsonString = JSON.stringify(person);
// const jsonString = JSON.stringify(people);

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const parseData = JSON.parse(jsonNames);
// const parseData = JSON.parse(jsonPerson);
// const parseData = JSON.parse(jsonPeople);

// console.log(parseData);

// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value))
// fetch("names.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    // .then(values => values.forEach(value => console.log(value)))
    // .then(values => values.forEach(value => console.log(value.name)))
    // .then(values => values.forEach(value => console.log(value.age)))
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));
    
