const container = document.querySelector(".container");


let boxHeight = 20;
let boxWidth = 20;
let boxMargin = 2;

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