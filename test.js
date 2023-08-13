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

// class myclass{
//  constructor(name,year){
//     this.name=name;
//     this.year=year;
//  }

//  age(x){
//     return x = this.year;
//  }

// }
// var obj =  new myclass("audi",2023);
// obj.age();
// console.log(obj);ler

// let arrayy=["rana","tana","vana","fana","tola"];
//  let [a,b,c,d,e]= arrayy;
//  console.log(d);

// class father{
//    myfunction(){
//       console.log("rasel rana her 1");
//    }
//    myfunction2(){
//       console.log("rasel rana here 2");
//    }
   
// }

// class child extends father{
//    myfunction2(){
//       console.log("change the property here child class is fire now");
//    }


// }

//  let obj= new child();
//  obj.myfunction();
//  obj.myfunction2();
// class myclass {
//    constructor(name,year){
//       this.name=name;
//       this.year=year;
//    }
//    age(){
//       return `my name is ${this.name}`;
//    }

// }
// let myobj = new myclass("jastin taudao",2023);
// console.log(myobj);

// let myfun = myobj.age();
// console.log(myfun);

// const Arr =[5, 10, 3, 7];
//  let Outputt=Math.max(...Arr);
//  console.log(Outputt); //Output 10

//  const arr2=[2, 8, 4];
//  let Outputt2=Math.max(...arr2);
//  console.log(Outputt2); //Output 8

// const person={
//     name: "John",
//      age: 30,
//      occupation: "Engineer",
// fullname:function(){
//    return this.name + this.age + this.occupation ;
   
// }

// };
// // let result=new person;
// // let finalresult=result.fullname;
// // console.log(finalresult);
// console.Log(person.fullName());

// class myclass{
//    constructor(width,height){
//      this.width =width
//      this.height=height;
//    }
//    fun(){
//     return this.width * this.height;
//    }
// }
// let myobj = new myclass(4,5);
//  let x=myobj.fun();
//  console.Log(x);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = getEvenNumbers(numbers);

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];

// const { first,second,third,fourth,last } = numbers;

// console.log(first); // Output: 1

// console.log(last); // Output: 5


// function myFunction(x,y,z) {
//    return x+y+z;
//  }

//  let numbers=[1,2,3,4,64,3,3,243,7,6,54,34,3,24,5,4,6,7];

//  let num1 =[1,2,...numbers ,3,4,5,6,7,8,9];
// //  let myout = myFunction(...numbers);
//  console.log(num1);
// const myObject={
//   firstname:"john",
//   lastname:"Doe",
//   fullname:function(){
//     return  this.firstname +" "+ this.lastname;
//   }
// }
// let pp=myObject.fullname();
// console.log(pp);


// const person={
//   fullName:function(){
//    return this.firstname +" "+ this.lastname;
//   }
// }
//  const person1={
//   firstname:"john",
//   lastname:"Doe"
//  }
// let re =person.fullName.call(person1);
// console.log(re);
// for(var i=5; i<=10; i++){
//   console.log(i);
// }
// function myFunction(a,b) {
//     console.log( a + b);
// };

// myFunction(4,3);
// (function () {
//    console.log("Hello! I called myself");
// })();


// function sum(...args) {
//   let sum = 0;
//   for (let value of args) sum += value;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function myfunction(){
//   let rana = 0;
//   for ( var i=0; i<arguments.length; i++){
//     rana+=arguments[i];

//   }
//   return rana;
// }
// var result = myfunction(1, 123, 500, 115, 44, 88);
// console.log(result);
// const myOb = {
//   firstName:"rahim",
//   lastName: "khan",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// let rebj=myOb.fullName();
// console.log(rebj);
// const person = {

//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"jannat",
//   lastName: "akter"
// }
// let reobj=person.fullName.apply(person1);
// console.log(reobj)
// // const person2 = {
// //   firstName:"Maryyy",
// //   lastName: "Doeee"
// // }

// // This will return "John Doe":
// person.fullName.call(person1);

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Jannat",
//   lastName: "akter"
// }
// let resultt = person.fullName.apply(person2,["Dhaka","india"]);
// console.log(resultt);
// class myclass{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

// }
// let myobj= new myclass("rasel",27);
// console.log(myobj);
// var num = true;
// var num2="hello world";
// console.log( num2);


      //  //5) javascript es6 map
      //     const numbers = [1, 2, 3, 4, 5];
      //    const doubleNumbers = numbers.map((x) => x * 2);
      //     console.log(doubleNumbers); 
      //      // Output: [2, 4, 6, 8, 10]

      const emptyArray = [];
function findMaxNumber(...emptyArray) {
      if(emptyArray.length==0){
            return null;
      }
  return Math.max(...emptyArray);
  
}
console.log(findMaxNumber()); // Output: null
      




