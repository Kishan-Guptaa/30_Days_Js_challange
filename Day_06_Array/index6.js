// DAY:06 -ARRAY

//Activity 1: Array Creation and Access

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr=[1,2,3,4,5];
console.log(arr);

//Task 2: Access the first and last elements of the array and log them to the console.
let arr1=[1,2,3,4,"titu"];
console.log("First Element of given array is",`${arr1[0]}`);
console.log("last Element of given array is",`${arr1[arr1.length-1]}`);


//Activity 2: Array Methods

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let arr2=[1,2,3,4];
arr2.push(5);
console.log(arr2)


//Task 4: Use the pop method to remove the last element from the array and log the updated array.
let arr3=[1,2,3,4,5,6];
arr3.pop();
console.log(arr3);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr3.shift();
console.log(arr3);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr3.unshift(1);
console.log(arr3);


//Activity 3: Array Methods (Intermediate)

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr4=[2,4,6,5,10];
let array=arr4.map(function(Element){
    return 2*Element;
})

console.log(array);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let filter=arr4.filter((ele)=>{
    if(ele%2==0){
        return ele;
    }
})

console.log(filter);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum=arr4.reduce((ele,currvale)=>ele+currvale,0);
console.log(sum);


//Activity 4: Array Iteration

//Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr4.forEach((ele)=>{
    console.log(ele);
})


//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let arr5=[[2,4,6],[3,6,9],[4,8,12]];
console.log(arr5);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr5[0][0]);
console.log(arr5[0][1]);
console.log(arr5[0][2]);
console.log(arr5[1][0]);
console.log(arr5[1][1]);
console.log(arr5[1][2]);
console.log(arr5[2][0]);
console.log(arr5[2][1]);
console.log(arr5[2][2]);