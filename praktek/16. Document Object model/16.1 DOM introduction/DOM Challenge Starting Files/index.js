// basic common uses in DOM
/*
// Select the element with ID 'header'
let header = document.getElementById('header');

// Change the text content of the header
header.textContent = 'Welcome to My Website';

// Select all list items inside a ul element
let listItems = document.querySelectorAll('ul > li');

// Add a class to each list item
listItems.forEach(item => {
  item.classList.add('highlight');
});

// Create a new paragraph element
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

// Append the new paragraph to the body
document.body.appendChild(newParagraph);

// Add an event listener to a button
let button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
*/ 

// selecting parts of the webiste using DOM
/*
// By Tag Name
let h2ElementByTagName = document.getElementsByTagName('h2')[0];

// By Query Selector
let h2ElementByQuerySelector = document.querySelector('h2');

// By Query Selector All
let h2ElementByQuerySelectorAll = document.querySelectorAll('h2')[0];

// Via Parent Body
let h2ElementViaBodyTag = document.body.getElementsByTagName('h2')[0];

// Via Child Nodes
let h2ElementViaChildNodes = document.body.childNodes[5]; // be cautious with this

// Via Children Property
let h2ElementViaChildren = document.body.children[2];

// By Specificity in Query Selector
let h2ElementBySpecificity = document.querySelector('body > h2');

// By ID (if ID is added)
let h2ElementById = document.getElementById('header2');

// By Class Name (if class is added)
let h2ElementByClassName = document.getElementsByClassName('header')[0];
*/ 


// change html tag using button event listener
/*
var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    const change = document.querySelector('body > ul').getElementsByTagName(`li`)[2];
    change.innerHTML = '<h1>hello</h1>';
   });
*/

// changing html tag style 
/*
document.querySelectorAll('ul > li')[0].getElementsByTagName('a')[0].style.color = 'red';
 document.querySelector('body > button').style.backgroundColor = "yellow";
*/

//changing html tag style using button event listener function by adding class list
/*
var button = document.querySelector('body > button');
button.addEventListener('click', () => {
  document.querySelector('body > h1').classList.toggle('large');
})
*/

//changing html attribute
document.querySelectorAll('body > ul > li > a ')[0].setAttribute("href", "https://www.youtube.com");