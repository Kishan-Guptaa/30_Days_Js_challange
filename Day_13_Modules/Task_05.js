//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

function firstName(name){
    console.log(`Hey I am ${name}`);
}

function lastName(name){
    console.log(`${name} is my last name.`);
}

const randomNum = function(){
    console.log(Math.round(Math.random()*10) + 1);
}

export {
    firstName,
    lastName,
    randomNum,
}
