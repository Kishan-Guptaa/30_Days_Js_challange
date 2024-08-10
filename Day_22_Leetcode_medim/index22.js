//Day 22 leetcode Medium 

//Task 1: Solve the "Add Two Numbers" problem on LeetCode
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

class ListNode{
    constructor(val =0 , next =null){
    this.val = val;
    this.next = next;
    }
}

function addTwoNumbers(l1,l2){
    let dummyHead =  new ListNode(0);
    let current = dummyHead;
    let carry  =0;


    while(l1 !==null || l2 !==null || carry !==0){
        let sum =carry;

        if(l1 !== null){
            sum += l1.val;
            l1= l1.next;
        }

        if(l2 != null){
            sum += l2.val;
            l2=l2.next;
        }

        carry = Math.floor(sum/10);
        current.next = new ListNode(sum%10);
        current = current.next;
    }
}

// Helper function to print a linked list
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
// Test case 1: 342 + 465
let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465
let result = addTwoNumbers(l1, l2);
printList(result); // Output should be 7 -> 0 -> 8 (807)


// Test case 2: 0 + 0
l1 = new ListNode(0);
l2 = new ListNode(0);
result = addTwoNumbers(l1, l2);
printList(result); // Output should be 0



//Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
function logTestCase(input) {
    const result = lengthOfLongestSubstring(input);
    console.log(`Input: "${input}" => Length of Longest Substring Without Repeating Characters: ${result}`);
}

// Test cases
logTestCase("abcabcbb"); // Output should be 3 (abc)
logTestCase("bbbbb");    // Output should be 1 (b)



//Task 3: Solve the "Container With Most Water" problem on LeetCode
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = width * minHeight;
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


function logTestCase(input) {
    const result = maxArea(input);
    console.log(`Input: [${input}] => Maximum Area: ${result}`);
}

logTestCase([1, 8, 6, 2, 5, 4, 8, 3, 7]); //  49
logTestCase([1, 1]);                     //  1
logTestCase([4, 3, 2, 1, 4]);            //  16
logTestCase([1, 2, 1]);                  //  2
logTestCase([2, 3, 10, 5, 7, 8, 9]);    // 36



//Task 4: Solve the "3Sum" problem on LeetCode.

function threeSum(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                // Skip duplicate elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}

// Test cases
function logTestCase(input) {
    const result = threeSum(input);
    console.log(`Input: [${input}] => Triplets: ${JSON.stringify(result)}`);
}

// Test cases
logTestCase([-1, 0, 1, 2, -1, -4]); // Output should be [[-1, -1, 2], [-1, 0, 1]]
logTestCase([0, 0, 0, 0]);          // Output should be [[0, 0, 0]]
logTestCase([1, 2, -2, -1]);        // Output should be []
logTestCase([3, -2, -1, 0, 1, 2]); // Output should be [[-2, 0, 2], [-1, 0, 1]]
logTestCase([1, 1, -2, -5, -3, 0, 0, 0, 0, 2, 2]); // Output should be [[-5, 3, 2], [-2, 0, 2], [-2, -1, 3]]



//Task 5: Solve the "Group Anagrams" problem on LeetCode.
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {

        const sortedStr = str.split('').sort().join('');
        

        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        

        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

// Test cases
function logTestCase(input) {
    const result = groupAnagrams(input);
    console.log(`Input: [${input}] => Grouped Anagrams: ${JSON.stringify(result)}`);
}

// Test cases
logTestCase(["eat", "tea", "tan", "ate", "nat", "bat"])
logTestCase([""]);                         
logTestCase(["a"]);                      
logTestCase(["abcd", "bcda", "cdab", "dabc", "dcba", "abcd"])
logTestCase(["abc", "bca", "cab", "acb", "bac", "cba"])
