// String methods = allow you to manipulate and work with text (strings)

// let userName = "BroCode";

// console.log(userName.charAt(2));

// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.length);

// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(3);

// console.log(userName);

// let result = userName.startsWith(" ");
// let result = userName.endsWith(" ");
// let result = userName.includes(" ");

// if(result){
//     // console.log("Your username can't begin with ' '");
//     // console.log("Your username can't end with ' '");
//     console.log("Your username can't include ' '");
// }
// else{
//     console.log(userName);
// }
// console.log(result);

let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-","/");
// phoneNumber = phoneNumber.padStart(15,"0");
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber);
