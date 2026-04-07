// function greet() { 
//     console.log("hello")
//  }

//////Javascript Event handling (External)
// let butn = document.querySelector("#btn");
// butn.onmouseover = ()=>{
//     butn.textContent = "Clicked!"
//     butn.style.backgroundColor = "red";
//     butn.style.color = "aqua";
//     butn.style.height = "200px"
// }
// butn.onmouseover = () =>{
//     butn.style.color = "red"
// }

//////////////////using addEventlistener()///////////////
let butn = document.querySelector("#btn");
butn.addEventListener("click", (event) => {
    butn.textContent = "Clicked!"
    butn.style.backgroundColor = "red";
    butn.style.color = "aqua";
    butn.style.height = "200px"
    console.log(event);
    console.log(event.target);
    
})

// butn.addEventListener("click", ()=>{
//     // butn.style.color = "green";
// })


// let styllleFun = () => {
//     butn.textContent = "Clicked!"
//     butn.style.backgroundColor = "red";
//     butn.style.color = "aqua";
//     butn.style.height = "200px"
// }
// butn.addEventListener("click", styllleFun)

// butn,removeEventListener("click", styllleFun)