// Day 8: ES6+ Features

//Activity 1: Template Literals
//(means literals delimited with backtick (`) characters)


//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name="Titu";
let age=21;

console.log(`my name is ${name} & I am ${age} years old`);


// Task 2: Create a multi-line string using template literals and log it to the console.
const  Eleanor_Roosevelt = `The future belongs to those 
who believe in the beauty of their dreams 
and have the courage to pursue their life goals 
with unwavering determination.`

console.log(Eleanor_Roosevelt);


 //Activity 2: Destructuring

/*Note: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr=["Kishan",1,2,3,4,"titu"];
const[first,second]=arr;
console.log(first);
console.log(second);

let a,b,other;
[a,b]=[10,20,30,40];
console.log(a);
console.log(b);

[a,b,...other]=[1,2,3,4,5,6,7,8,9];
console.log(other);


//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book={
    title:"The_Power_of_your_subconscious_mind :  a self-help book that explores the potential and influence the subconscious mind can have on our lives",
    author:"Dr Joseph Murphy",

    details:function(){return `this of this book is ${this.title} & author of the book is ${author}`},
    updateyear:function(year){
        return this.year=year;
    }
}

const{title,author}=book;
console.log(title);
console.log(author);

//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];

let arr3=[...arr1,...arr2];
console.log(arr3);


//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum=function(...n){
    ans=0;
    for(const num of n){
        ans+=num;

    }
    return ans;
}

console.log(sum(1,2,3,4,5));
console.log(sum(-10,-9,-8,-7,7,8,9,10,9));

// // major difference between rest and spread operator is in rest operator we are converting the rest arguments into an array! while in spread operator we are converting the array into elements


//Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function prd(a,b=1){
    return a*b;
}  

console.log(prd(10,20));
console.log(prd(9));


//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let author1 = 'James clear';
let title1 = "Atomic Habits: The Life-Changing Million Copy Bestseller";
let publishYear = 1999;

const Books ={
    author1,
    title1,
    publishYear,
    greet(){
        return `${title1} by ${author1} , is published in the  year ${publishYear}`
    },
    ['classic'](){
        return publishYear<2000;
    }
}

console.log(Books.greet());
console.log(Books.classic());


//Task 9: Create an object with computed property names based on variables and log the object to the console.

const details={
    first_name:"Kishan",
    last_name:"Gupta",
    age:21,

}

const p1="fistName";
const p2="lastName";
const p3="age";

const Details={
    [p1]:"kishan",
    [p2]:"Gupta",
    [p3]:21,
}

console.log(details);
console.log(Details);