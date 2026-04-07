// console.log(window);
// window.console.log("How are you ?")

///Dom selection using ID
// let heading = document.getElementById("heading")

// let paragraph = document.getElementById("parag")

// ///using class
// let divs = document.getElementsByClassName("box")

// //usimg tag names
// let tag = document.getElementsByTagName("div")

//using query selector
//select using tagName
// let headings = document.querySelector("h1")
// let box = document.querySelector(".box")
// let box = document.querySelector("#heading")

//QUERY SELECTOR ALL
// let box = document.querySelectorAll(".box")

///DOM Manipulation
//tagName...returns the tagname
// let heading = document.querySelector("#heading")
// console.log(heading.tagName);

//innerText
// let heading = document.querySelector("#heading")
// console.log(heading.innerText);

//textContent
// let heading = document.querySelector("#heading")
// console.log(heading.innerHTML);
// heading.textContent = "this is the power of DOM"


// heading.innerHTML =" <p>How are you</p>"

// let heading = document.querySelector("#heading")
// console.log(heading.getAttribute("style"));
// console.log(heading.getAttribute("class"));
// heading.setAttribute("class", "new")
// heading.setAttribute("style", "color: red")
// heading.removeAttribute("id")


// let heading = document.querySelector("#heading")
// heading.style.backgroundColor = "violet" 
// heading.style.color = "white" 
// heading.classList.add("headingStyle")


//DOM insertion / deletion//////////
let list = document.querySelector("#list")
let newElement = document.createElement("li")
newElement.textContent = "Strawberry"
// list.append(newElement);
// list.prepend(newElement);

//////adds before Kiwi//////////
// let kiwi = document.querySelector("#kk")
// kiwi.before(newElement)

//////adds before Kiwi//////////
let kiwi = document.querySelector("#kk")
// kiwi.after(newElement)
kiwi.remove(newElement)

