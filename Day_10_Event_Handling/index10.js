// DAY_10 : Event Handling


//Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph 
 const p=document.querySelector("#para");
 const btn=document.querySelector(".button");
 btn.addEventListener('click',()=>{
    p.innerHTML="Simplicity is the soul of efficiency.";
 });


 // Task 2: Add a double-click event listener to an image that toggles its visibility. 

 const img=document.querySelector("img");
 const div=document.querySelector("#container");
 img.addEventListener('dblclick',()=>{
    img.style.opacity ="0";
    div.innerHTML="image gone";
 })


//  Activity 2: Mouse Events


// Task 3: Add a mouseover event listener to an element that changes its background color.
const div1=document.querySelector(".box");
div1.addEventListener('mouseover',()=>{
    div1.style.backgroundColor="yellow";
})


// Task 4: Add a mouseout event listener to an element that resets its background color.
div1.addEventListener('mouseout',()=>{
    div1.style.backgroundColor = 'red';
    div1.style.border = 'solid 2px black';
})


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input=document.querySelector("input");
input.addEventListener('keydown',(arr)=>{
    console.log(arr.key);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const detail=document.querySelector("#detail");
const paragraph=document.querySelector("#input");
detail.addEventListener('keyup',()=>{
    console.log(paragraph.innerHTML);
})


// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form=document.querySelector("#submit");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})


// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown=document.querySelector("#dropdown");
const value=document.querySelector("#selected");
dropdown.addEventListener('change',()=>{
    value.innerHTML = ` selected value is ${dropdown.value}`
})


// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list=document.querySelector('#list');

const button=document.querySelector("#btn");
list.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML);
})


//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const newbtn=document.querySelector("#btn");
newbtn.addEventListener('click',()=>{
    const requirement =prompt("add new task !");
    const element=document.createElement("li");
    element.innerHTML=requirement;
    list.append(element);

})
