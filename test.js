// const myArray = [1,2,3,6,6,7,84,3,9,7,6];
// const [first, second, third, ...mytest] = myArray;

// console.log(first);   // Output: 1
// console.log(second);  // Output: 2
//  console.log(third);   // Output: 3
//  console.log(mytest);   // Output: 3

//  const myArray = [10,second = 20];
// const [first = 20 ] = myArray;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
//   const myarrtest=[12,33,77,43,54,66,77,54,45,675,98,65,45,34,54,65];
//   const [st,nd,rd,...mt]= myarrtest;
//   console.log(st);
//   console.log(nd);
//   console.log(rd);
//   console.log(mt);

//   let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a); // Output: 10
// console.log(b); // Output: 5
// let A=50;
// let B=90;
// [A,B]=[B,A];
// console.log(A); // Output: 10
// console.log(B);
// const myArray=[1,2,3,4,5,45,56,67,75,64,43,43,46,3,64,95,64,42,4322,34,53];
// const [ num1,num2,num3,num4,num5,...r]=myArray;
// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)
// console.log(r)

// const student={
//     id:1511056127,
//     fname:"rana",
//     lname:"tana",
//     language:{
//         native:"english",
//         mother_l:"bangla",
//         another:"tamil",
//     }
// }

//  const studentinfo=(student)=>{
//     console.log(`${student.id}` + `${student.fname}`);
//  }
//  studentinfo(student);

// Define an array with two items:
// const profile = ["rrubel", "hossain", "bana","food","ganja","biri"];

// // Define a function with one destructuring array containing two parameters:

// function myprofile([fisrtN,Secondname,...myArray]=profile){
//     return `my name is ${fisrtN},${Secondname},${Secondname}`;
    
// }
// let yytest=myprofile(profile)
// console.log(yytest);
// console.log(yytest.myArray);


// const student={
//     id:1511056127,
//     fname:"rana",
//     lname:"tana",
//     language:{
//         native:"english",
//         mother_l:"bangla",
//         another:"tamil",
//     }
// }
// const {language:{another}}= student;
// console.log(another);

// const profile = {
//     firstName: "Oluwatobi", 
//     lastName: "Sofela", 
//     website: "codesweetly.com"
//   };
  
//   const { firstName: forename, lastName: surname, website: onlineSite } = profile;
  
//   console.log(forename); // "Oluwatobi"
//   console.log(surname); // "Sofela"
//   console.log(onlineSite); // "codesweetly.com"
// import {text} from "./es6.js"
// console.log(text);

class myclass{
 constructor(name,year){
    this.name=name;
    this.year=year;
 }

 age(x){
    return x = this.year;
 }

}
var obj =  new myclass("audi",2023);
obj.age();
console.log(obj);





