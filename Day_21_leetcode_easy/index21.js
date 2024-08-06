// Day21-Leetcode easy

// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.

// l

let twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; 
            }
        }
    }
    return [];
}

//*//Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.



function reverseInteger(x) {
    const INT_MIN = (-2) ** 31;
    const INT_MAX = 2 ** 31 - 1;

    
    const sign = x < 0 ? -1 : 1;
   
    x = Math.abs(x);

   
    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + digit;
    }

    return reversed * sign;
}

// Test cases
const testCases = [18923, -9000123, 908120, 0, 1534236469, -1534, 1000000001,900];
testCases.forEach(testCase => {
    console.log(`Input: ${testCase}, Reversed: ${reverseInteger(testCase)}`);
});




// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrom(x){
    if(x<0 || (x%10 == 0 && x !==0)){
        return false;
    }

    const str = x.toString();

    function isPalindrom(left,right){
        if(left>=right){
            return true;        
        }
        if (str[left] !== str[right]) {
            return false;
        }

        return isPalindrom(left+1,right-1);
    }
    return isPalindrom(0,str.length-1);
}

// Test cases
const testCase = [121, -1211211, 10, 1001, 12321, 123456, 1221];
testCase.forEach(testCase => {
    console.log(`Input: ${testCase}, Is Palindrome: ${isPalindrom(testCase)}`);
});


// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.


function ListNode(val = 0, next =null){

   this.val = val;
   this.next = next;
}

function mergeTwoList(l1,l2){
    let temp = new ListNode(0);
    let head = temp;

    while(l1 !== null && l2 !== null){
        if(l1.val<l2.val){
            head.next = l1;
            l1 = l1.next;
        }else{
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    if (l1 !== null) {
        head.next = l1;
    } else {
        head.next = l2;
    }
    return temp.next;
}



function createLinkedList(arr){
    if(arr.length === 0){
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;

    for(let i=0;i<arr.length;i++){
        current.next = new LinkedNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printLinkedList(head){
    let result = [];
    let current = head;
    while(current !== null){
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(' ->'));
}



// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
// Feature Request:

function isVAlid(s){
    const MatchingBrackets = {
        ')' : '(',
        '}' : ' {',
        ']' : '[',

    };

    let stack = [];

    for(let char of s){
        if(char in MatchingBrackets){
            const topElement = stack.length === 0 ?'#' : stack.pop();
            if(MatchingBrackets[char] !== topElement){
                return false;
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// TEST_CASE

const testCase1 = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "", expected: true }, // Edge case: empty string
    { input: "(", expected: false } // Edge case: unbalanced single opening bracket
];

testCase1.forEach(({ input, expected }) => {
    console.log(`Input: "${input}", Expected: ${expected}, Result: ${isVAlid(input)}`);
});