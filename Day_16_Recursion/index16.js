// Day_16_Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const factorial = function( n ){
    if( n==1 || n==0 ){
        return 1;
    }

    let  temp = factorial (n-1);
    return temp * n;
}

console.log(factorial(12));
console.log(factorial(0));
console.log(factorial(8));
console.log(factorial(5));

//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibo = function(n){
    if(n==0 || n==1){
        return n;
    }

    let temp1 = fibo(n-1);
    let temp2 = fibo(n-2);
    return temp1+temp2;
}

console.log(fibo(10));  
console.log(fibo(3));
console.log(fibo(1));
console.log(fibo(0));
console.log(fibo(6));


//Activity 2: Recursion with Arrays



//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.


const arr = [1,2,3,4,5,6,7,8,9];

const sum = function(i){
    if( i==0){
        return arr[0];
    }

    let temp = sum(i-1);
    return temp+arr[i];    
}

console.log(sum(4));
console.log(sum(9));
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(6));
console.log(sum(7));
console.log(sum(8));
console.log(sum(0));


//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
const arr1 = [4,5,6,9,0,-1];
const arr2 = [-1,-3,9,99,87,100];
const arr3 = [0,0,0];
const arr4 = [9];
const max = function(arr,n){
    if(n===1){
        return arr[0];
    }

    let x = max(arr,n-1);
    return Math.max(arr[n-1],x);
}
console.log(max(arr1,arr1.length));
console.log(max(arr2,arr2.length));
console.log(max(arr3,arr3.length));
console.log(max(arr4,arr4.length));


//Activity 3: String Manipulation with Recursion

//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.



const revString = function(str){

    if(str.length <= 1){
        return str;
    }

    let temp = revString(str.substring(1));
    return temp + str.charAt(0);
}


console.log(revString("Titu"));
console.log(revString("kishan"));
console.log(revString("K"));


//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.


const palindrome = function(arr,sp,ep){
    if(sp==ep){
        return true;
    }
    if(sp>ep){
        return true;
    }
    if(arr[sp]!=arr[ep]){
        return false;
    }else{
        let temp = palindrome(arr,sp+1,ep-1);
        return temp;
    }
}
let myarr = ["MALAYALAM"];
let charArray = myarr.join('').split('');
let myarr1 = ["Titu"]
let charArray1 = myarr1.join('').split('');

console.log(palindrome(charArray,0,charArray.length-1));//true
console.log(palindrome(charArray1,0,charArray1.length-1));//false


//Activity 4: Recursive Search

//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases


const binarySearch = function(arr,key,s,e){
    if(s>e){
        return 0;
    }

    let mid = Math.floor((s+e)/2);
    if(arr[mid] ==key){
        return mid;
    }
    if(arr[mid]<key){
        return binarySearch(arr,key,mid+1,e);
      }
      return binarySearch(arr,key,s,mid-1);
}

const binaryarray = [2,3,4,5,6,7];
const key1 = 5;
const key2 = 2;
const key3 = 7;
console.log(binarySearch(binaryarray,key1,0,binaryarray.length-1));
console.log(binarySearch(binaryarray,key2,0,binaryarray.length-1));
console.log(binarySearch(binaryarray,key3,0,binaryarray.length-1));



//Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.


const count = function(arr,key,idx){
    if(idx>arr.length){
        return 0;
    }

    let temp = count(arr,key,idx+1);
    if(arr[idx] == key){
        return temp+1;
    }else{
        return 0+temp;
    }
}

let array= [1,2,3,4,4,7,7,9,9,9,9,9,9,2,5,8,];
let KEY = 9;
let KEY1=7;
let  KEY2 = 6;
console.log(count(array,KEY,0))
console.log(count(array,KEY1,0))

console.log(count(array,KEY2,0))


//Activity 5: Tree Traversal (Optional)


//Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

//check this link = 'https://leetcode.com/problems/binary-tree-inorder-traversal/description/'


//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

//check this link = "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/"
