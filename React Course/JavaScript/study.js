//----LET AND CONSTANT----//
// const myName ="Max";
// console.log(myName);

//----ARROW FUNCTION----//

//  function printMyName(name)
//  {
//      console.log(name);
//  }

// printMyName('Firdaus')

// const printMyName = (name) => {
//     console.log(name)
// }

// printMyName('Jihan')

// const multiply = (number) => {
//     return number * 2;
// }

// console.log(multiply(2));

// const multiply = (number) => number * 2;
// console.log(multiply(3));

//import and export--

//import {something} from something.js

//class---

// class Human {
//     constructor(){
//         this.gender="Female";
//     }

//     printGender(){
//         console.log(this.gender);
//     }
// }

// class Person extends Human {

//     constructor(){
//         super();
//         this.name = "Jihan";
//     }

//     printName(){
//         console.log(this.name);
//     }
// }

// const person =  new Person ();
// person.printName();
// person.printGender();

//class, properties, methods (new method)

// class Human {

//     gender="male";

//     printGender =()=>{
//         console.log(this.gender);
//     }
// }

// class Person extends Human {

//     name = "Firdaus Jamdi";

//     printName=()=>{
//         console.log(this.name);
//     }
// }

// const person =  new Person ();
// person.printName();
// person.printGender();

//---SPREAD AND REST OPERATORS--//

//spread operators

// const numbers = [1,2,3,4,5]

// const NewNumbers = [...numbers, 6,7,8,9,10]

// console.log(NewNumbers);

//create object
// const person = {
//     name:"Jihan Balqis"
// };

// const NewPerson ={
//     ...person,
//     age: 23
// };

// console.log(NewPerson)

//rest operators

// const filter = (...arguements) => {
//     return arguements.filter(el => el === 1);
// }

// console.log(filter(1,2,3));

//destructuring

//array destructring

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3);

//reference and primitive types refreshers

// const person = {
// 	name: "Jihan Balqis",
// };

// const secondPerson = {
// 	...person,
// };

// person.name = "Nur Jihan";

// console.log(secondPerson);

//array functions

// const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map((num) => {
// 	return num * 2;
// });

// console.log(numbers);
// console.log(doubleNumArray);
