// Day 14: Classes

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person{
    constructor(name,age){
        this.name =name,
        this.age = age
    }

    greeting(){
        console.log(`Hello Viewer  I am ${this.name}  and my age is ${this.age} welcome to my repo`);
    }

    updatesage(){
        this.age = this.age+15;
        console.log(`updated age is ${this.age}`);
    }
}

const per1 = new Person("Titu",21);
per1.greeting()

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.


per1.updatesage();


//Activity 2: Class Inheritance

//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
    }
    getstudID(studentId){
        console.log(`Your studentID is ${this.studentId}`);
    }
    greeting(){
        console.log(`hey ! ${this.name} your age is ${this.age} and your id is ${this.studentId}`);
    }
}


const stud = new Student("Titu",21,"319");
stud.getstudID();


//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

const s2 = new Student("kishan",20,"1234");
s2.greeting();
s2.updatesage();



//Activity 3: Static Methods and Properties


//Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

     static Greeting(){
         console.log("Hello EveryOne 😊");
     }
}

person.Greeting();


//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class student extends Person{
    static student_count = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        student.student_count++;
        console.log(`number of student = ${student.student_count}`);
    }

}


const s3 = new student("titu",21,'098');
const s4 = new student("Shubh",20,'198');
const s5 = new student("kishan",21,'298');


//Activity 4: Getters and Setters


//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person2{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `Hey ${this.firstName} ${this.lastName} age's ${this.age}`;

    }
    set fullName(name,){
        const [firstName,lastName] = name.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
    
}

const p3 =new Person2("Shubh","Ujala",20);


//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
//p3.fullName("shubh ujala",20);
console.log(p3.fullName);

//Activity 5: Private Fields (Optional)

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance;
    constructor(initialBalance){
        this.#balance=initialBalance;
    }
    deposite(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`deposites: $${amount}. New balance: $${this.#balance}`);
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
        this.#balance -= amount;
        console.log(`withdrew: $${amount}. New balance: $${this.#balance}`);
        }else{
            console.log("Invalid amount");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const account1 =new Account(1000);
account1.deposite(500);
account1.withdraw(300);
console.log(`Final balance : $${account1.getBalance()}`);





//Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account1{
    constructor(owner, balance =0){
        this.owner=owner;
        this.balance = balance;
    }

    deposite(amount){
        if(amount>0){
            this.balance += amount;
            console.log(`deposite: $${amount}`);
            this.logBalance();

        }else{
            console.log("deposite amount must be positive");
        }
    }
    withdraw(amount){
        if(amount>0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw: $${amount}`);
            this.logBalance();
        }else{
            console.log("Invalid withdraw amount");
        }
    }
    logBalance() {
        console.log(`Balance: $${this.balance}`);
    }
}


 // Create an instance of the Account class
 let myAccount = new Account1("shubh ujala", 1000);
  
 // Test the deposit method
 myAccount.deposite(200);
 
 // Test the withdraw method
 myAccount.withdraw(-400);
 
 // Test deposit with a negative amount
 myAccount.deposite(-500);
 
 // Test withdraw with an amount greater than the balance
 myAccount.withdraw(1000);
 
 // Test withdraw with a negative amount
 myAccount.withdraw(-500);
 
