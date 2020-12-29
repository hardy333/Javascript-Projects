const container = document.querySelector(".container");
const lighter = document.querySelector(".lighter");

let boxHeight = 50;
let boxWidth = 50;
let boxMargin = 0.5;

let cols = Math.floor(window.innerWidth / (boxWidth + 2*boxMargin)); 
let rows = Math.floor(window.innerHeight / (boxHeight + 2*boxMargin));

document.body.style.setProperty("--box-height", `${boxHeight}px`);
document.body.style.setProperty("--box-width", `${boxWidth}px`);
document.body.style.setProperty("--box-margin", `${boxMargin}px`);


window.addEventListener("resize", () => {
    cols = Math.floor(window.innerWidth / (boxWidth + 2*boxMargin)); 
    rows = Math.floor(window.innerHeight / (boxHeight + 2*boxMargin));

    //box size changing condition
    if(false){
        document.body.style.setProperty("--box-height", `${boxHeight}px`);
        document.body.style.setProperty("--box-width", `${boxWidth}px`);
        document.body.style.setProperty("--box-margin", `${boxMargin}px`);
    }

    createGrid();
})


function createGrid(){
    container.innerHTML = "";

    for(let i = 0; i < cols * rows; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        container.append(box);
    }
}
createGrid();


window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    lighter.style.left = x + "px";
    lighter.style.top = y + "px";

    if(x <= 0 || y <= 0){
        lighter.style.left = -1000 + "px";
        lighter.style.top = -1000 + "px";

    }


})
document.body.addEventListener("mouseleave", () => {
    lighter.style.left = -1000 + "px";
    lighter.style.top = -1000 + "px";


})