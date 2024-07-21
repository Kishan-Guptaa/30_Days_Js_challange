//DAY-5 :FUNCTION
// //Activity 1: Function Declaration

////Task 1: Write a function to check if a number is even or odd and log the result to the console.

function check(n){
    if(n%2==0){
        console.log("number is even");
    }else{
        console.log("number is odd");
    }
}

check(14);

//Task 2: Write a function to calculate the square of a number and return the result.

function sqaure(n){
    console.log(`square of number ${n} is ${n*n}`);
}

sqaure(5);


//Activity 2: Function Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function checktwonumber(n1,n2){
    if(n1>n2){
        console.log(`${n1} is maximum`);
    }else{
        console.log(`${n2} is maximum`);
    }
}

checktwonumber(10,15);

// Task 4: Write a function expression to concatenate two strings and return the result.

function concatstring(s1,s2){
    if(typeof(s1)=="string" && typeof(s2)=="string"){
        console.log(s1+""+s2);
    }else{
        console.log("ERROR-404");
    }
}

concatstring("Titu","coder");

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

 sum =(num1,num2)=>{
    console.log(num1+num2);
}

sum(9,31);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value

checkchar =(s1,c1)=>{
    if(s1.includes(c1)){
        console.log("true");
    }else{
        console.log("false");
    }
}

checkchar("titu",'ki');


//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(n1,n2=31){
    console.log(`product of ${n1} and ${n2} = ${n1*n2}`);
}

product(9);

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
 function person(s1,age=25){
    if(typeof(s1)=="string" && typeof(age)=="number"){
        console.log(`Hello ${s1} nice to meet you ,your age is ${age}`);
    }else{
        console.log(`Please provide your name and your age!`);
    }
 }

 person("titu",21);


//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function higherOrder(fun,n){
    if(typeof(fun)=="function" && typeof(n)=="number"){
        for(let i=1;i<=n;i++){
            fun();
        }
    }
}

sayhello=()=>{
    console.log("hello");
}

higherOrder(sayhello,5);

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function higherOrder(f1,f2,val){
    for(let i = 1 ; i <=val ; i++){
        f1();
    }
    f2();
}

const sayHello = () => {console.log("Hello");}
const sayName = () => {console.log(`Titu here`);}

higherOrder(sayHello,sayName,5)