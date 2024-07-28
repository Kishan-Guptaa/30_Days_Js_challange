// Day_12_Error-Handling


//Activity 1: Basic Error Handling with Try-Catch

 //Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function error1(){
    try{
        let result =   undefined;
        console.log(error.name);
    }catch(error){
        console.log("Error Occured");
    }
}

error1();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function division(n1,n2){
    try{
        if(n2==0){
            throw Error("denominator can not be zero");
        }
        let result = n1/n2;
        console.log(`result : ${result}`);
    }catch(error){
        console.error("error occured:",error.message);
    }
}

division(9,0);
division(9,3);
division(32,3);


//Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function division1(n1,n2){
    try{
        if(n2==0){
            throw Error("denominator can't be zero");
        }
        let result1 = n1/n2;
        console.log(`result: ${result1}`);
    }catch(error){
        console.error("error occured:",error.message);
    }finally{
        console.log(" I am finally block");
    }
}

division1(2,5);
division1(9,0);
division1(12,21);


//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
function throwError() {
    throw new CustomError('This is a custom error message');
}
try {
    throwError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Custom error caught:', error.message);
    } else {
        console.error('Unexpected error:', error.message);
    }
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.'
function validatesUser(string){
    try{
        if(string===" " || string==="null" || string ==="undefined" || typeof(string) !== "string" ){
          throw Error("Your input are not in string form please provide string-format inputs");
        }
        let name=string;
        console.log(`Hello bro ${name}, how is your revision progress going?`);
    }catch(error){
        console.error("Error Occured:",error.message);
    }
}

validatesUser("Shubh");
validatesUser(55);

//Activity 4: Error Handling in Promises

//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise1= new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(Error("Error Occured"));
    },3000);
})
promise1.catch((error)=>{
    console.log("error:",error.message);
})


//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const function1 = async function(){
    try{
        let result = await new Promise((resolve,reject)=>{
            Math.random() * 10 <5 ? resolve("operation successful") : reject( Error("failed! "));
        })
        console.log("result: ",result);
    }catch(error){
        console.error("error:",error.message);
    }
}

function1();    


//Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://jsonplaceholder.typi.com/posts/2")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: invalid url!"))


//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

 async function API(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        if(!response.ok){
            throw Error("Error Occured: 'Oops' data not fatch");
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
    console.error("error:",error.message);
    }
}

API();
