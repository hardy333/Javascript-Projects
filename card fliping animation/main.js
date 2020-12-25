const section = document.querySelector("section");
const x = document.querySelector(".box-3");

x.addEventListener("click", show);

function show(){
    const box = section.getBoundingClientRect();

    console.log(box.width);
    console.log(box.height);

    

    console.log(section.scrollHeight);
    
}

window.addEventListener("click", (e) => {
    console.log(e.x);
    console.log(e.y);
    console.log("window");
})

document.documentElement.addEventListener("click", (e) => {
    console.log(e.x);
    console.log(e.y);
    console.log("documentElement");

})


section.addEventListener("click", (e) => {
    console.clear();
    console.log(e.pageX);
    console.log(e.pageY);
    console.log("section");

})