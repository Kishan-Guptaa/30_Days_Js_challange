// Day-19  Regular expression!

//refrence web-site - https://regexr.com/

// Tasks/Activities:

//Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const String = "Javascript is very use-full language.";
const regex =  /\bJavascript\b/g;
const regex1 = /\bscripting\b/g;
const matches = String.match(regex);
const matches1 = String.match(regex1);
console.log(matches);
console.log(matches1);


//Note-> \b asserts a word boundary, ensuring that we match "JavaScript" as a whole word, not as part of another word (e.g., "JavaScripting").
//JavaScript is the literal string we want to match.
// \b again asserts a word boundary after "JavaScript".
//g flag enables global search, so it finds all occurrences in the input string, not just the first

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

// Sample input string
const inputString = "there are 9 planets in our solar system. and talking about earth so earth have 1 moon!";

// Regular expression to match all digits
// const regex3 = /\b1,2,3,4,5,6,7,8,9\b/g;
// in this way it is not done because it will find the exact match of the 1,2,3,4,5,6,7,8,9 which is not present anywhere so it will done in this way!

const regex3 = /\d/g

// if we dont't put g after slash then we get this result:
/*['9',
index: 10,
input: 'there are 9 planets in our solar system. and talking about earth so earth have 1 moon!',
groups: undefined
]*/


const regex4 = /\bearth\b/g

const matches3 = inputString.match(regex3);
const matches4 = inputString.match(regex4);
console.log(matches3);
console.log(matches4);



//Activity 2: Character Classes and Quantifiers

//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// Sample input string
const String1 = "Hello World! My name Is Kishan Gupta.";
const regex5 = /\b[A-Z][a-z]*\b/g;
const matches5 = String1.match(regex5);
console.log(matches5);
const regex6 = /\b[A-Z]*\b/g
const match6 = String1.match(regex6);
console.log(match6);

/*
[
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', ''
] 
*/

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const myString = "There are 123 apples and 456 bananas.";
const regex7 = /\d+/g;
const matches7 = myString.match(regex7);    
console.log(matches7);


//Activity 3: Grouping and Capturing

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.


 

const phoneNumber = "(123) 456-7890";
const regex8 = /^\((\d{3})\) (\d{3})-(\d{4})$/;
const matches8 = regex8.exec(phoneNumber);
console.log("Matchrs:",matches8);
if(matches8 !== null){
    const areaCode = matches8[1];
    const centralOfficeCode = matches8[2];
    const lineNumber = matches8[3];
    
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No match found.");
}

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "tituyahoo.com";
const regex9 = /[A-Z]\w+/g;
const regex10 = /(@[\w.]+)/g;
const username =  email.match(regex9);
const domain = email.match(regex10);
console.log("username",username);
console.log("email-",email);


//Activity 4: Assertions and Boundaries

//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const text = "Hello World , this is a test ";
const regex11 = /^\w+/;
  // Matches a word at the beginning of the string
const matches9 = text.match(regex11);
console.log(matches9[0]);


//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text1 = "Hello Reading , I am Titu";
const regex12 = /\w+$/;
const matches10 = text1.match(regex12);
console.log(matches10[0]);


//Activity 5: Practical Applications


//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.


const password = "Titu987#";
const regex13 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

const isValid = regex13.test(password);

if(isValid){
  console.log("Password is valid");
}else{
  console.log("password is not valid");
}



//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url =  "https://www.example.com/path?query=string#fragment";

const regex14 = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-\.~:@\?%&=+#]*)?$/;

const isUrlValid = regex14.test(url);

if(isUrlValid){
  console.log("URL is Valid");
}else{
  console.log("URL is not valid");
}

