//DAY:07 -OBJECTs

//Activity 1: Object Creation and Access

//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const The_Power_of_your_subconscious_mind={
    author:"Dr Joseph Murphy",
    title:" a self-help book that explores the potential and influence the subconscious mind can have on our lives",
    year:1963,
}

console.log(The_Power_of_your_subconscious_mind.author);
console.log(The_Power_of_your_subconscious_mind.title);
console.log(The_Power_of_your_subconscious_mind.year);

//Task 2: Access and log the title and author properties of the book object.
console.log(The_Power_of_your_subconscious_mind.title);
console.log(The_Power_of_your_subconscious_mind.year);


//Activity 2: Object Methods

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book ={
    title:"The_Power_of_your_subconscious_mind :  a self-help book that explores the potential and influence the subconscious mind can have on our lives",
    author:"Dr Joseph Murphy",
    details:function(){
        return `title of the book ${this.title} and author of the book ${this.author}`},

    updateyear:function(year){
        return this.year=year;
    }
}

console.log(book.details());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateyear(2003);
console.log(book.year);


//Activity 3: Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name:"my favorite books ",

    books : [
        {
            name:"Something I Never Told You",
            author:"Shravya Bhinder",
            title:"evokes the feeling of regret that arises when the desire to be honest comes too late",

        },
        {
            name:"THE ART OF HAPPINESS",
            title:"The Art of Happiness: A Handbook for Living.",
            author:"the Dalai Lama and Howard Cutler.",
        },

        {
            name:"12th Fail",
            author:"Anurag Pathak",
            title:"The book titled '12th Fail' is authored by Anurag Pathak. It is an inspiring story about overcoming failures and challenges in the pursuit of one's dreams.",
        }

    ]
}

console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);

console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);


//Activity 4: The this Keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

Books=function(){
    return `the title of these book is ${book.title} and this book is published in the year of ${book.year}`;
}

console.log(Books);


//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const pusthak ={
    
    book:"Something I Never Told You",
    title:"evokes the feeling of regret that arises when the desire to be honest comes too late",
    year:2019,

}

for(const key in pusthak){
    console.log(pusthak[key]);
}

for(const key in pusthak){
    console.log(key);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const key =Object.keys(pusthak);
const value=Object.values(pusthak);

console.log(key);
console.log(value);
