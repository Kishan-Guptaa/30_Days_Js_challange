//Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.



import _ from 'lodash'

const myarr = [1,2,3,45,6];
console.log(_.reverse(myarr));
console.log(_.chunk(myarr,1));