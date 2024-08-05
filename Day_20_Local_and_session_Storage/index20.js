// Day20-Local and session Storage

//Activity 1: Understanding LocalStorage

//Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.


localStorage.setItem("mykey","javascript");
const string = localStorage.getItem("mykey");
console.log(string);

//Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const obj ={
    name:"kishan",
    age:21,
    email : "titu@gmail.com",
}

localStorage.setItem("object",JSON.stringify(obj));
const output = localStorage.getItem("object");
const actual_output = JSON.parse(output);
console.log(actual_output);


//Activity 2: Using LocalStorage

//Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

localStorage.setItem("name","kishan gupta");
localStorage.setItem("age","21");
localStorage.setItem("email","titu@gmail.com");
const item1 = localStorage.getItem("age");
localStorage.removeItem("age");
const item2 = localStorage.getItem("key");
const item3 = localStorage.getItem("email");
console.log(item2);
console.log(item3);
console.log(item1);

localStorage.setItem('password',"titu21");
localStorage.removeItem('password')
console.log(localStorage.getItem('password'));//null


//Activity 3: Understanding SessionStorage

//Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('name',"Kishan gupta");
console.log(sessionStorage.getItem('name'));

//Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const object = {
    username : "kishan",
    challenges : "30-days-js",
    details:{
        email : "titu@gmail.com",
        pass:"titu987",
        passStatus:"strong",
    }
}

sessionStorage.setItem("userDetails",JSON.stringify(object));
const output1 = sessionStorage.getItem("userDetails");
console.log(JSON.parse(output1));


//Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.


sessionStorage.setItem("name","kishan gupta");
sessionStorage.setItem("age","21");
sessionStorage.setItem("email","titu@gmail.com");
const item4 = localStorage.getItem("age");
localStorage.removeItem("age");
const item5 = localStorage.getItem("key");
const item6 = localStorage.getItem("email");
console.log(item4);
console.log(item5);
console.log(item6);

sessionStorage.setItem('password',"titu21");
sessionStorage.removeItem('password')
console.log(sessionStorage.getItem('password'));//null

// Task 9 : Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveandretrivestorage(key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);

    const localStorageValue = localStorage.getItem(key);
    const SessionStorageValue = sessionStorage.getItem(key);

    console.log(`Value from localStorage for key ${key}:`,localStorageValue);
    console.log(`Value from sessionStorage for key ${key}:`,SessionStorageValue);
}

saveandretrivestorage("username","kishan");

//Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.


function cleardata(){
    localStorage.clear();
    sessionStorage.clear();

    const islocalstorageEmpty = localStorage.length === 0;
    const isSessionstorageEmpty = sessionStorage.length===0;

    console.log('Is localStorage empty?',islocalstorageEmpty);
    console.log('Is sessionStorage empty?',isSessionstorageEmpty);
}

cleardata();

