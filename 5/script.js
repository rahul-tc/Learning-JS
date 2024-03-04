// HTML DOM Document object model

// created by browser as the html load into the browser.

//Browser Create object of html called 'document object'.
//In document object there is model of complete html in
// tree like structure

console.log(document);

//queryselector
//it returns  first element that matches selectors or group of selectors.
let resultedElement = document.querySelectorAll("p");
let resultedElements = document.querySelectorAll(".coderss");
console.log(resultedElement);
console.log(resultedElements);
//access with class using ".coderss"
//access with Id using "#coders"
//old ways to get element by tag name using getElementsByTagName and also using id "getElementById"
//this only wrk for tag  names not classes or ids and in id we use TAGNAME By ID

//InnerText ignores spaces but innerHtml does not ignore spaces
//it retrieve and set content in HTML Format
//it retrieve and set content in Plain Text
let content = document.querySelector("#coders");
content.innerText += "<p>Added text</p> ";
console.log(content.innerText);
let contents = document.querySelector(".coderss");
content.innerHTML += "<p>Added html</p>";
console.log(contents.innerHTML);

//getting and setting attribute
let coderLink = document.querySelector("a");
console.log(coderLink.getAttribute("href"));

//setting
coderLink.setAttribute("href", "www.youtube.com");
console.log(coderLink.getAttribute("href"));

//Adding styles
let heading = document.querySelector("h1");
heading.style.color = "red"; //using style property
heading.style.backgroundColor = "yellow";

//add , remove and replace class of element
let headings = document.querySelector("h1");

//add the class
headings.classList.add("newClass");

//remove the class
headings.classList.remove("newClass");

//replace the class
heading.classList.replace("main", "replaced");

//event Basics

let eventElement = document.querySelector(".clickMe");
console.log(eventElement);

eventElement.addEventListener("click", function (e) {
  //console.log("You clicked on me!");//use without e
  console.log(e.target);
  e.target.style.textDecoration = "line-through";
  //to remove
  //e.target.remove();
});

//create and remove element

// const ul = document.querySelector("ul");
// let button = document.querySelector(".clickMe");

// button.addEventListener("click", function () {
//   let li = document.createElement("li");
//   li.textContent = "Something New Added";
//   //is we use prepend then it will add something in top
//   ul.append(li);
// });

//bubbling
// const ul = document.querySelector("ul");
// ul.addEventListener("click", () => {
//   console.log("Inside UL");
// });

//delegation
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    e.target.remove();
  }
});

//copy event
let copyRightElement = document.querySelector(".copy");

copyRightElement.addEventListener("copy", () => {
  console.log("This is copy right content");
});

//mouse Event

let copyRightElements = document.querySelector(".copy");
copyRightElement.addEventListener("mousemove", (e) => {
  console.log(e.offsetX, e.offsetY);
});
