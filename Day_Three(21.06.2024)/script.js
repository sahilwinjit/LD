// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

/*

btn1.addEventListener("click", (evt) => {
    console.log("Button 1 was clicked - handler 1");
    console.log(evt);
});

btn1.addEventListener("click", (evt) => {
    console.log("Button 1 was clicked - handler 2");
    console.log(evt);
});

const handler3 = () => {
    console.log("Button 1 was clicked - handler 3");
    console.log(evt);
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
    console.log("Button 1 was clicked - handler 4");
    console.log(evt);
});

btn1.removeEventListener("click", (evt) => {
    console.log("Button 1 was clicked - handler 3");
    console.log(evt);
});

*/
let currMode = "light";
let modeBtn = document.querySelector("#mode");
modeBtn.addEventListener("click", ()=> {
    if(currMode === "light") {
        currMode = "dark";
        // document.querySelector("body").style.background = "black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else {
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currMode);
});

