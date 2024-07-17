//*********Day-01 Variables and datatypes**********

/*Activity-01(Variable declaration)*/

//Task 1: Declare a variable using var,assign it a number,and log the value to the console

var num = 100;
console.log(num);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console

let myName = "Shubh";
console.log(myName);

/*Activity 2: Constant Declaration*/

//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const myBill = 666.99;
console.log(myBill);

/*Activity 3: Data Types*/

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const userName = "XYZ";
const userSalary = 45000;
const userWorkingDays = ["Mon","Tue","Wed"]
const userDetails = {
    userEmail:"XYZ@yahoo.com",
    userPassword:"94722"
}
const userBill = 559.88

console.log(typeof(userName));
console.log(typeof(userSalary));
console.log(typeof(userWorkingDays));
console.log(typeof(userDetails));
console.log(typeof(userBill));

//bigint 
const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); //bigint


/*Activity 4: Reassigning Variables*/

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let mySalary = 45000;
console.log(mySalary);
mySalary = 50000;
console.log(mySalary);

/*Activity 5: Understanding const*/

//Task 6: Try reassigning a variable declared with const and observe the error. 

const userUID = "129ABC"
console.log(userUID);
// userUID = "123CFR"; it will throw an error as we assign userID as constant so it can't be reassign

/*
Feature Request:
1> Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

2> Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment. 
*/
//Feature Request 1 
const var1 = 1; //number
const var2 = 1.1; //number
const var3 = "shubh"//string
const var4 = {//object
    userID : 1234,
    userEmail : "222@google.com"
}
const var5 = function(){//function
    console.log("hello world");
}

console.log(var1,typeof(var1));
console.log(var2,typeof(var2));
console.log(var3,typeof(var3));
console.log(var4,typeof(var4));
console.log(var5,typeof(var5));

//Feature request 2
let name = "Himesh"
console.log(name);
name = "shubh"
console.log(name); //reassignable

const salary = 200;
// salary = 2000;
// console.log(salary); //error



//Summary 
//there is majorly two categories of datatypes (i) Primitive & (ii) Non-Primitive

//Under primitve we have majorly 7 types
//String, Number, Boolearn, null, undefined, Symbol, BigInt ->stored in stack

//And Under non primitive we have 
//Array, Objects, Functions-> stored in heap