//Day-23 Leetcode hard!

//Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.


function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === x ? Infinity : nums1[partitionX];
        
        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === y ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid");
}

const nums1_1 = [1, 3];
const nums2_1 = [2];
console.log(`Median of [${nums1_1}] and [${nums2_1}] is ${findMedianSortedArrays(nums1_1, nums2_1)}`);  // Expected output: 2.0




//Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    for (let list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        let node = minHeap.extractMin();
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.insert(node.next);
        }
    }

    return dummy.next;
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        const min = this.heap[0];
        const end = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index].val < this.heap[parentIndex].val) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test case
function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Test case 1
const l1 = createList([1, 4, 5]);
const l2 = createList([1, 3, 4]);
const l3 = createList([2, 6]);
const lists1 = [l1, l2, l3];
console.log('Merged list 1:');
printList(mergeKLists(lists1));  // Expected output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6


//Solve the "Trapping Rain Water" problem on LeetCode
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

function logTrappedWater(height) {
    console.log(`Elevation map: [${height}]`);
    console.log(`Trapped water: ${trap(height)} units`);
}

// Test case 1
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
logTrappedWater(height1);  // Expected output: 6 units

// Test case 2
const height2 = [4, 2, 0, 3, 1, 2, 5];
logTrappedWater(height2);  // Expected output: 9 units


//Task 4: Solve the "N-Queens" problem on LeetCode.
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false; 
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false; // Check right diagonal
        }
        return true;
    }

    function solve(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.'; 
            }
        }
    }

    solve(0);
    return solutions;
}

function logNQueensSolutions(n) {
    const solutions = solveNQueens(n);
    console.log(`N = ${n}`);
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1}:`);
        solution.forEach(row => console.log(row));
        console.log('');
    });
}

// Test case 1: N = 4
logNQueensSolutions(4);



//Task 5: Solve the "Word Ladder" problem on LeetCode.
function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const queue = [[beginWord]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const path = queue.shift();
        const word = path[path.length - 1];

        if (word === endWord) return path;

        for (let i = 0; i < word.length; i++) {
            for (let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++) {
                const newWord = word.slice(0, i) + String.fromCharCode(char) + word.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([...path, newWord]);
                }
            }
        }
    }

    return [];
}


function logWordLadder(beginWord, endWord, wordList) {
    const result = wordLadder(beginWord, endWord, wordList);
    console.log(`Start Word: ${beginWord}`);
    console.log(`End Word: ${endWord}`);
    console.log(`Word List: [${wordList}]`);
    console.log(`Transformation Path: [${result.join(' -> ')}]`);
}

// Test case 1
const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];
logWordLadder(beginWord1, endWord1, wordList1);