//Day 2: Operators
//Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to the console.
let a=9;
let b=31;
console.log("addition of two number:",a+b);


//Task 2: Write a program to subtract two numbers and log the result to the console.
let num1=31;
let num2=9;
console.log("substraction of two number:",num1-num2);


//Task 3: Write a program to multiply two numbers and log the result to the console.
let num3=31;
let num4=9;
console.log("Multiplication of two number:",num3*num4);


//Task 4: Write a program to divide two numbers and log the result to the console.
let a1=31;
let b1=9;
console.log("Division of two number:",a1/b1);


// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let a2=31;
let b2=9;
console.log("Remainder of these num:",a2%b2);


//Activity 2: Assignment Operators
//Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num5=1;
num5 +=1;
console.log("assignment operator for addition-",num5);


//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let num6=1;
num6 -=1;
console.log("assignment operator for addition-",num6);


//Activity 3: Comparison Operators
//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let num7=31;
let num8=9;

let greaterthan=num7>num8;
let lessthan=num7>num8;
console.log("num7 is greater than num8",greaterthan);
console.log("num8 is less than num7",lessthan);


// - Task 9: Write a program to compare two numbers using `>=` and `<=` log the result to the console.
let a3 = 10;
let b3 = 10;
let a4 = 10;
let b4 = 5;

let GreaterThanEqual = a3 >= b3;
let LessThanEqual = a4 <= b4;



console.log(a3 + " >= " + b3 + ": " + a3 + " Greater than or Equal to " + b3);
console.log(a3 + " <= " + b3 + ": " + a3+ " Less than or Equal to " + b3);


//Task 10: Write a program to compare two numbers using `==` and `===` log the result to the console.
let num9=31;
let num10="31";

let isEqual= num9==num10;
console.log(num9+"=="+ num10+":"+isEqual);

let isStritlyEqual=num9===num10;
console.log(num9+" ==="+num10+":"+isStritlyEqual);


//Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let num11=31;
let num12=9;
let num13=30;

if((num11>num12)&&(num11>num13)){
    console.log(num11);
}


//Task 12: Write a program that uses the `||` operator to combine two conditions and log the result to the console.
let num14=31;
let num15=9;
let num16=400;

if((num14>num15)||(num14>num16)){
    console.log(num11);
}


// - Task 13: Write a program that uses the `!` operator to negate condition and log the result to the console.
let val1 = 20;
let val2 = 30;

let condition3 = val1 > val2;
let negatedCondition = !condition3;

console.log(val1 + " > " + val2 + ": " + condition3);

console.log("!(" + val1 + " > " + val2 + "): " + negatedCondition);


//Activity 5: Ternary Operator
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let value=31;
let ans=value>=0?" postivie number ":" negative number ";
console.log(value + " is " + ans);

//FEATURE REQUEST
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let valu1=10;
let valu2=20;

let addition=valu1+valu2;
let substraction=valu2-valu1;
let multiplication=valu1*valu2;
let division=valu2/valu1;
let modul=valu2%valu1;

console.log(" addtion of "+ valu1+" + "+valu2+" = "+addition);
console.log(" multiplication of "+ valu1+" * "+valu2+" = "+multiplication);
console.log(" subtraction of "+ valu2+" - "+valu1+" = "+substraction);
console.log(" division of "+ valu2+" / "+valu1+" = "+division);
console.log(" reminder of "+ valu2+" % "+valu1+" = "+modul);


//2. Comparison and Logical Operators: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let value2=10;
let value3=20;

let grt=value2<value3;
let less=value2>value3;
let grtequal=value2<=value3;
let lessequal=value2>=value3;
let equal=value2==value3;
let StritlyEqual=value2===value3;

console.log("value2 is < value3=",grt);
console.log("value2 is > value3=",less);
console.log("value2 is <= value3=",grtequal);
console.log("value2 is >= value3=",lessequal);
console.log("value2 is equal value3=",equal);
console.log("value2 === value3=",StritlyEqual);


//3.  Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let int = -9;

let temp= int>=0? "postive":"negative";
console.log(int+ " is "+temp);


