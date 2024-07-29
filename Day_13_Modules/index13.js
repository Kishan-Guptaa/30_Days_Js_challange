// Day 13: Modules
import { add } from './module1.js';
import { userDetails } from './Task_02.js';
import { addition, exponential, multiply } from './Task_03.js';
import  greet  from './Task_04.js';
import { firstName, lastName, randomNum } from './Task_05.js';


// Activity 1: Creating and Exporting Modules

console.log("\n <-----Task 1------->\n");

add(9,31);

console.log("\n <-----Task 2------->\n")

console.log(userDetails);


// Activity 2: Named and Default Exports

console.log("\n <-----Task 3------->\n");

multiply(2,4,6);
addition(9,31);
exponential(2,5);


console.log("\n <-----Task 4------->\n");
greet("Viewer");


//Activity 3: Importing Entire Modules

console.log("\n <-----Task 5------->\n");

firstName("Kishan");
lastName("gupta");
randomNum();
