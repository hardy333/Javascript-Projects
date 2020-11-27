const sections = document.querySelectorAll(".section");
const section1 = sections[0];
const section2 = sections[1];
const section3 = sections[2];
const section4 = sections[3];
const section5 = sections[4];


const box1 = section1.getBoundingClientRect();
const box2 = section2.getBoundingClientRect();
const box3 = section3.getBoundingClientRect();
console.log(box3);

let {scrollTop, scrollHeight, clientHeight} = document.documentElement;



window.addEventListener("scroll", () => {

    // console.log(box1);
    // console.log(box2);

    // console.log("scrollTop", scrollTop);
    // console.log("clientHeight",clientHeight)
    // console.log("scrollHeight",scrollHeight)
    // console.log("///////////////////////////");
    // console.log("///////////////////////////");
    // console.log("///////////////////////////");

    const box3 = section3.getBoundingClientRect();
    // console.log(box3.top, clientHeight);
    // if(box3.top <= clientHeight - 100){
    //     alert("section 3 is visible in viewport");
    // }
    console.log("scrolled");
})
section3.addEventListener("click", () => {

    
    // document.documentElement.scrollTop = scrollHeight - clientHeight - 100;

    const x = setInterval(() => {
        document.documentElement.scrollTop += 40;
        const box5 = section5.getBoundingClientRect();
        if(box5.top <= 0){
            clearInterval(x);
        }

        
    }, 1000/60);
})
section5.addEventListener("click", () => {
let {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    console.log(scrollTop);
    console.log(scrollHeight);
})