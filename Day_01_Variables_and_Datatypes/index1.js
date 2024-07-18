//DAY_1 Variable ans data_type

//Activity_1
//TASK_1:Declear a variable using "var", assign it a number , and log the value  to the console

var num = 9;
console.log(num);


//TASK_2:Declear a variable using "let ", assign it a string , and log the value  to the console

let str="titu";
console.log(str);


//Activity_2
//Task_3:Declear a variable using "const ", assign it a boolean value, and log the value  to the console

const boolean=true;
console.log(boolean);

//Activity_3
//Task_4:create  variable of different data type (number,string,boolean,object,array) and log each variable 
//  type using the typeof operator

//1.number type
let date=9;
console.log(typeof(date));


//2.string
let name="titu";
console.log(typeof(name));


//3.boolean
let type=false;
console.log(typeof(type));

//4.object
let detail={
    name:"titu",
    age:21,
}
console.log(typeof(detail));

//5.array
let arr=[1,2,3,4,5,6,7,8,9];
console.log(typeof(arr));

//Activity_4
//reassigning Variable
//Task_5:Declare a variable using let ,assign it an initial value,reasigning a new value,and log both value
//to the console
let initial_value="first";
console.log("Initial Value =",initial_value);
initial_value="second";
console.log("Reassigned Value=",initial_value);

//Activity_6
//Task_6:Try to reassigning  a variable decleared with constant and observe the error
const initial_values="initial value";
initial_values=""
console.log(initial_values)

//TypeError: Assignment to constant variable.



//FEATURE REQUEST !
//// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs
// both the values of each variable to the console. 
let num1=9;
console.log(num1);
let string="titu";
console.log(string);
let bool = true;
console.log(bool);
let list=[0,9,"titu"];
console.log(list);
let object={name:"titu",age:21};
console.log(object);

//2.Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const`
// when it comes to reassignment.

let namee="titu";
console.log(namee);
namee="kishan"
console.log(namee);

const salary=5000;
console.log(salary);
salary=50000;
console.log(salary);



