


// Day_09_DOM Manipulation


//Activity 1: Selecting and Manipulating Elements

//Task 1: Select an HTML element by its ID and change its text content.
function changeText(){
    const element=document.getElementById("myparagraph");
    element.innerHTML= "hey my name is Titu"
}


//Task 2: Select an HTML element by its class and change its background color.
// function changeBackgroundColor() {
//     const elements = document.getElementsByClassName('colorChange');
    
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.backgroundColor = 'yellow';
//     }
// }
const elements = document.getElementsByClassName('colorChange');
elements[0].style.backgroundColor = 'yellow';
console.log(elements);


//Activity 2: Creating and Appending Elements

//Task 3: Create a new div element with some text content and append it to the body.
const maindiv = document.querySelector('#main');
const newdiv = document.querySelector('#newdiv');
const text = document.querySelector('#maintext');
newdiv.appendChild(text);
maindiv.appendChild(newdiv);


//Task 4: Create a new li element and add it to an existing ul list.

const ul=document.querySelector("#week");

const li=document.createElement("li");
li.innerHTML="SUNDAY";
li.style.fontSize="20px";
ul.appendChild(li);


//Activity 3: Removing Elements.

//Task 5: Select an HTML element and remove it from the DOM.

let remove =document.getElementsByClassName("removed");
remove[0].remove();


//Task 6: Remove the last child of a specific HTML element.

const list=document.querySelector(".removing");
const lastchild=list.lastElementChild
lastchild.remove();


//Activity 4: Modifying Attributes and Classes

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const image=document.querySelector("img");
image.src="chai.jpg";


//Task 8: Add and remove a CSS class to/from an HTML element.

const ele=document.querySelector(".removeclass");
ele.classList.remove("removeclass")
ele.classList.add("addclass")



//Activity 5: Event Handling.


//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.querySelector('#content')
const btn = document.querySelector("#changepara")
btn.addEventListener('click',()=>{
    para.innerHTML = "Nope! you are not Kishan"
})


// //Task 10: Add a mouseover event listener to an element that changes its border color.   

const div=document.querySelector("#border");
div.addEventListener("mouseover",()=>{
    div.style.border ="4px solid purple";
    div.style.backgroundColor="pink";
})