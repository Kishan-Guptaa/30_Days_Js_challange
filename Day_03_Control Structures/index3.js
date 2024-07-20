//Day 3: Control Structures

//Activity 1: If-Else Statements
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num=31;

if(num>0){
    console.log("num is positive");
}else if(num<0){
    console.log("num is negative");
}else{
    console.log("num is zero");
}

////Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age =21;
if(age>=18){
    console.log(" great your age is above 18 so, You are eligible for vote !");

}else{
    console.log("Oops your age is below 18 so you are not eligible for vote");
}


//Activity 2: Nested If-Else Statements
//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1=31;
let num2=9;
let num3=22;

if(num1>num2){
    if(num1>num3){
        console.log(num1+" is graterthan "+num2+" and "+num3);
    }
}else if(num2>num1){
    if(num2>num3){
        console.log(num2+" is graterthan "+num1+" and "+num3);
    }
}else{
    console.log(num3+" is graterthan "+num1+" and "+num2);
}

//Activity 3: Switch Case
////Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5 ;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("your number is more than 7 please put number in betwwen 1 to 7");
        break;
}


//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks=95;

switch(true){
    case marks>=90:
        console.log("A grade");
        break;
    case marks>=80:
        console.log("B grade");
        break;
    case marks>=60:
        console.log("C grade");
        break;
    case marks>40:
        console.log("D grade");
        break;
    case marks<=40:
        console.log("F grade");
    default:
        console.log("OKAY ! ERROE-404");
                
        
}


//Activity 4: Conditional (Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let value=3;

value%2==0? console.log("number is even"): console.log("number is odd");


//Activity 5: Combining Conditions.

////Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year =2024;
if((year%4 == 0 && year%100 != 0) || (year%100 == 0)){
    console.log("Leap year");
}else{
    console.log("Not Leap year");
}

// Feature Request:

//Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let n=12;
if(n>0){
    console.log("positive");
}else if(n==0){
    console.log("Zero");
}else{
    console.log("Negative");
}


//Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

let ages=17;
if(ages>=18){console.log("Eligible");}
else{console.log("Not Eligible");}

//Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

let days = 7 ;
switch(days){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("your number is more than 7 please put number in betwwen 1 to 7");
        break;
}

//Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let mark=71;

switch(true){
    case mark>=90 :
        console.log("A grade");
        break;
    case mark>=80:
        console.log("B grade");
        break;
    case mark>=60:
        console.log("C grade");
        break;
    case mark>40:
        console.log("D grade");
        break;
    case mark<=40:
        console.log("F grade");
    default:
        console.log("OKAY ! ERROE-404");
                
        
}

//Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let years=2003;
if((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0){
    console.log('leap year');
}else{
    console.log('not a leap year');
}