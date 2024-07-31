// Day_15_CLOUSER



//Activity 1: Understanding Closures

//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function OuterFun(name){
    const userName = name;
    function innerfunc(){
        console.log(`hey I am ${userName}`);
    }
    return innerfunc;
}

const func = OuterFun("TiTU");
func()

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

const PrivateCounter = (count)=>{
    let myCount = count
    incrementCount();
    function incrementCount(){
        myCount++;
    }
    
    return function getCout (){
        console.log(myCount);
    }
}

const count1 = PrivateCounter(9);
count1();


//Activity 2: Practical Closures

//Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

const uniqueID = ()=>{
    let lastId  = 0;
    return function(){
        let id_num = Math.round(Math.random()*20)+10;
        let unique_id = `${id_num}titu`
        lastId = unique_id;
        console.log(unique_id);
        console.log(`last id = ${unique_id}`);
    }
}

const myid = uniqueID();
myid();


//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function closure(name){
    return function greeting(){
        console.log(`hey ${name} welcome to repo`);
    }
}

const closure1= closure("kishan");
closure1();

//Activity 3: Closures in Loops

//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


const numFunctions = 5;
const functionsArray = [];


for (let i = 0; i < numFunctions; i++) {
  functionsArray[i] = function() {
    console.log(i);
  };
}


// // functionsArray.forEach(fn => fn());
functionsArray.forEach((fn)=>{
    fn();
})

//Activity 4: Module Pattern

//Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const collection = function(){
    let items = [];
        function add_item(item){
            items.push(item);
            console.log(`item added = ${item}`);
        }

        function remove_item(item){
            let index = items.indexOf(item);
            if(index!= -1){
                items.splice(item);
                console.log(`item removed: ${item}`);
            }else{
                console.log(`${item} not found`);
            }
        }
        
        function showList(){
            console.log(`list of items: ${items}`);
        }

        return{
            add:add_item,
            remove:remove_item,
            list:showList,
        }
}

const collection1 = collection();
collection1.add("Burger");
collection1.add("Dairy-Milk");
collection1.add("Kit-kat");
collection1.add("Pizza");
collection1.remove("Pizza");
collection1.list();

//Activity 5: Memoization

//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memorise(func){
    const cache = {};
    return function(arg){
        if(cache[arg] === undefined){
            cache[arg] = func(arg);
        }
        return cache[arg];
    }
}

function Cube(n){
    return n*n*n
}

const memoriseCube = memorise(Cube);
console.log(memoriseCube(10));


//Task 8: Create a memoized version of a function that calculates the factorial of a number.

function fact(n){
    let fact = 1;
    for(let i = 1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}

const memoriseFactorial = memorise(fact);
console.log(memoriseFactorial(5));
