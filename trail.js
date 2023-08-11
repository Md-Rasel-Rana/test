function myprofile(){
    console.log("rasel rana");
}
myprofile();

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

let mybj=myObject.fullName();
console.log(mybj)
