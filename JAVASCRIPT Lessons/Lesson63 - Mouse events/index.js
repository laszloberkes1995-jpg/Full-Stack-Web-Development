// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback, anonymous/arrow function)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕"
// }

myButton.addEventListener("click", event =>{
    // event.target.style.backgroundColor = "tomato";
    // event.target.textContent = "OUCH! 🤕";
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event =>{
    // event.target.style.backgroundColor = "yellow";
    // event.target.textContent = "Don't do it 😦";
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😦";
});

myButton.addEventListener("mouseout", event => {
    // event.target.style.backgroundColor = "lightgreen";
    // event.target.textContent = "Click Me 😀";
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀";
});
