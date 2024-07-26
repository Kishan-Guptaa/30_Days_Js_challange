// Day 11: Promises and Async/Await


// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("promise consumed! ")
    },2000)
})
promise.then((message)=>{
    console.log(message);
})


// //Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("promise rejected!");
    },2000)
})

promise1.catch((message)=>{
    console.log(message);
})


// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData =((data,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },delay)
    })
});
fetchData("Data 1",1000)
.then((data)=>{
    console.log(data);
    return fetchData("Data 2",1000);
})
.then((data)=>{
    console.log(data);
    return fetchData("Data 3",1000);
})
.then((data)=>{
    console.log(data);
})

//Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const async =async()=>{
    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise resolve");
        },2000)
    });
    const result = await promise2;
    console.log(result);
}

async();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const async1 = async() =>{
    const promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Promise again rejected !");
        },3000);
    });

    try{
        const msg = await promise3;
        console.log(msg);
    }
    catch(error){
        console.log(error);
    }
}

async1();


// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const fetchdata = () =>{
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error=>console.log("error :",error));
}

fetchdata();


//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchdata2 =async()=>{
    try{
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        const data = response.json();
        console.log(data);
    }catch(error){
        console.log("error: ",error);
    }
}

fetchdata2();


// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseOne = fetchData("Promise 1",1000);
const promiseTwo = fetchData("Promise 2",2000);
const promiseThree = fetchData("Promise 3",3000);

Promise.all([promiseOne,promiseTwo,promiseThree])
.then(values=>{
    console.log(values);
})


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseOne,promiseTwo,promiseThree])
.then(value =>{
    console.log("first resolved promise: ",value);
})