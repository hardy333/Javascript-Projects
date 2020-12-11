console.log(222);

const copySound = new Audio("./copySound.mp3");
console.log(copySound);


const longSound = new Audio("./longSound1.wav");

const radioactive = new Audio("./Imagine Dragons - Radioactive.mp3");


document.querySelectorAll("button")[0].addEventListener("click", () => {
	// longSound.play();
	radioactive.play();


})


document.querySelectorAll("button")[1].addEventListener("click", () => {
	// longSound.pause();

	radioactive.pause();


})

document.querySelectorAll("button")[2].addEventListener("click", () => {
	// longSound.pause();

	radioactive.load();


})

const music = document.querySelector("#myMusic");

console.log(music);