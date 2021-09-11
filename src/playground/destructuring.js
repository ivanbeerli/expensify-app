// 
// Object destructuring
// 

// const person = {
//     name: "Ivan"    ,
//     age: 39,
//     location: {
//         city: 'Mendoza',
//         temp: 20
//     }
// };

// const {name:namee = "Anonymus" , age} = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${namee} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(temperature && city){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "",
//     author: "",
//     publisher: {
//         namen:"penguin"
//     }
// }

// const {name: publisherName = "Self-published"} = book.publisher;

// console.log(`${publisherName}`);


// 
// Array destructuring
// 


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'new york'] = address;
// console.log(`You are in ${city} ${state}`);


const order = ['Coffe', '$1', '$2', '$3'];

const [drink, sSize, mSize, lSize] = order;
console.log(`${drink} is ${mSize}`);
