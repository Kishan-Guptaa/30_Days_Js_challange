// Day 4: Loops


// //Activity 1: For Loop

//Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++){
   
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for(let i=1;i<=10;i++){
    console.log("5 * "+i+" = "+5*i);
}


//Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum=0;
let i=1;
while(i<=10){
    sum=sum+i;
    i++;
}

console.log("sum of numbers from 1 to 10 =",sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let n=10;
while(n>=1){
    console.log(n);
    n--;
}

// Activity 3: Do...While Loop

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let n1=1;
do{
    console.log(n1);
    n1++;
}while(n1<=5);


//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let fact=1;
let num=5;
let k=1;
do{
    fact=fact*k;
    k++;
}while(k<=num);
console.log(fact);


 //Activity 4: Nested Loops

 //Task 7: Write a program to print a pattern using nested for loops:
 /*
*
* *
* * *
* * * *
* * * * *
*/

let nst = 1;
for(let i = 0 ; i <5 ; i++){
    let k = "";
    for(let j = 0 ; j < nst;j++){
       k=k+"* " ;
    }
    nst++;
    console.log(k);
}

//Activity 5: Loop Control Statements
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}


// Feature Request:

// Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
for(let i=1;i<=10;i++){
    console.log(i);
}

let num1=1;
while(num1<=10){
    console.log(num1);
    num1++;

}

//Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
for(let i=1;i<=10;i++){
    console.log("5 * "+i+" = "+ 5*1);
}

// Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

let nst1=1;
for(let i=0;i<5;i++){
    let k1="";
    for(let j=0;j<nst1;j++){
        k1=k1+" * ";
    }
    nst1++;
    console.log(k1);
}


// Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let s=0;
let num2=1;
while(num2<=10){
    s=s+num2;
    num2++;
}
console.log(s);


//Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

let fact1=1;
let num3=5;
let k1=1;
do{
    fact1=fact1*k1;
    k1++;
}while(k1<=num3);
console.log(fact1);