//Day 18: Algorithms/


//Activity 1: Sorting Algorithms

//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

let arr =[1,2,3,4,5,6];
function bubblesort(array){
    let n = array.length;
    for(let  i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){                         //*
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                arrya[j+1] = temp;
            }
        }
    }
}

bubblesort(arr);
console.log(arr);


//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap arr[i] and arr[minIndex]
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp
      
    }
    
  }
selectionSort(arr);
console.log(arr);

//Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];

    for(let i =0;i<arr.length;i++){
        if(i !== Math.floor(arr.length / 2)){  //*
            if(arr[i]<pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
    }
    return [...quickSort(left) , pivot ,...quickSort(right)];

}

let sortarr = quickSort([90,76,30,24,9]);
console.log(sortarr);

//Activity 2: Searching Algorithms


//Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

let myarr = [4,5,15,10,6];
let key =10;
const linearSearch = function (arr,k){
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i] == k){
            console.log(`element found at index number ${i}`);
        }
    }

}

linearSearch(myarr,6);


//Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

const arr1 = [31,9,40,4,9,7,6,0,8,1];

bubblesort(arr1);

function binarySearch(arr,target){
    sp =0;
    ep = arr.length-1;
    while(sp<=ep){
        let mid = Math.floor(sp + (ep - sp )/2);
        if(arr[mid] == target){
            console.log(`Yes! target found at ${mid} index`);
            break;
        }
        else if(arr[mid]>target){
            ep = mid-1;
        }
        else{
            sp = mid+1;
        }
    }
}


binarySearch(arr1,31);

binarySearch(arr1,9);

binarySearch(arr1,6);


//Activity 3: String Algorithms

//Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrence(str){
    let count = {};
    for(let char in str){
        count[char] = count[char] ? count[char]+1 :1;
    }
    console.log(count);
}

countCharacterOccurrence("kishan gupta");

 //* //Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeating(str){
    let maxLength = 0;
    let start = 0;
    let seen = {};

    for(let end = 0 ; end< str.length;end++){
        if(seen[str[end]] !== undefined && seen[str[end]] >= start){
            start = seen[str[end]] + 1;
        }
        seen[str[end]] = end;
        maxLength =Math.max(maxLength,end - start + 1);
    }
    console.log(
        "Length of Longest Substring Without Repeating Characters:",
        maxLength
    );
}


longestSubstringWithoutRepeating("kishaan")
// Activity 4: Array Algorithms


// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr,k){
    k = k % arr.length;
    let rotateedArray = arr.slice(-k).concat(arr.slice(0,-k)); //*
    console.log(rotateedArray);
}

rotateArray([3,4,5,6,7,8],9);


//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArray(arr1 , arr2){

    let mergedArray = [];
    let i = 0, j = 0;

    while(i<arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j] ){
            mergedArray.push(arr1[i]);
            i++;
        }else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }


    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("merged array", mergedArray);
}

mergeSortedArray([1, 3, 5, 7], [2, 4, 6, 8]);


// Activity 5: Dynamic Programming (Optional)


// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n){
    let fib = [0,1];
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] +fib[i-2];
    }
    console.log("Fibonacci",fib);
    return fib[n];
}

fibonacci(10);


//*// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - weights[i - 1]] + values[i - 1]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    console.log("Maximum value in Knapsack:", dp[n][capacity]);
    return dp[n][capacity];
}