//         //Module-3 Assignment all question

// //1) javascript For in loop answer:
// function printObjectProperties() {
//   const person={
//     firstName:"John",
//      lastName:"Doe", 
//      age:50, 
//      eyeColor:"blue"
//   }
//   for( let prop in person){
//     console.log(prop + ": "+ person[prop]);
//   }

// };
// printObjectProperties();


//2) javascript function returns answer:
const numbers1 = [10, 20, 5, 30, 25];
function findMaxNumber(numbers1) {
  return Math.max.apply(" ", numbers1);
}
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
function findMaxNumber(numbers2) {
  return Math.max.apply(" ", numbers2);
}
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
function findMaxNumber(...emptyArray) {
      if(emptyArray.length==0){
            return null;
      }
  return Math.max(...emptyArray);
  
}
console.log(findMaxNumber()); // Output: null


//  //3 javascript Spread Operator ans:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// function mergeArrays(arr1,arr2){
//   return [...arr1,...arr2];
// }
//  console.log(mergeArrays(arr1,arr2)); // Output: [1, 2, 3, 4, 5, 6]



// // 4) javascript arrow function answer:
//  var calculateSquare=(x)=>{
//    return x*x;
//  }
//  console.log(calculateSquare(5)); // Output: 25
// console.log(calculateSquare(8)); // Output: 64



     //  //5) javascript es6 map
      //     const numbers = [1, 2, 3, 4, 5];
      //    const doubleNumbers = numbers.map((x) => x * 2);
      //     console.log(doubleNumbers); 
      //      // Output: [2, 4, 6, 8, 10]





      //   //6) javascript es6 static keyword answer:
      // class MathUtility{

      //   static multiply(x,y){
      //       return x*y;
      //   } 
      // }
      // console.log(MathUtility.multiply(5, 3)); // Output: 15
      // console.log(MathUtility.multiply(2, 8)); // Output: 16



      //    //7) javascript es6 class inheritance answer:
//    class Animal{

//     constructor(name,sound){
//       this.name= name;
//       this.sound=sound;

//     }
//     makeSound(){
//       return this.sound;
//     }

//   }

//    class Dog extends Animal{
    
//     fetch(){
//       console.log("Fetching the ball!");
//     }

//    }
//   const animal = new Animal("Lion", "Roar");
//   console.log(animal.makeSound()); // Output: "Roar"


// const dog = new Dog("Buddy", "Woof");
// console.log(dog.makeSound()); // Output: "Woof"
// dog.fetch(); // Output: "Fetching the ball!"



    //   //8) javascript es6 super keyword answer:
// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   introduce(){
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Student extends Person {
//   constructor(name,age,major){
//     super(name,age)
//     this.major = major;
//   }
//   introduce1(){
//     super.introduce()
//     return `I am majoring in ${this.major}`;
  
//    }
// }

// const person1 = new Person("John", 30);
// let result=person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."
// console.log(result);


// const student1 = new Student("Alice", 20, "Computer Science");
// let result2= student1.introduce1(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."
// console.log(result+result2);








