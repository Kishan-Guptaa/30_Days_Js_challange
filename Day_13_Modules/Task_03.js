// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

export const multiply = function(a,b,c){
    console.log(a*b*b);
}

export const addition =function(a,b){
    console.log(a+b);
}

export const exponential = function(a,b){
    console.log(a**b);
}