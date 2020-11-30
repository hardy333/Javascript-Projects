const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth - 100;
// canvas.height = window.innerHeight - 100;

// window.addEventListener("resize", () => {
// 	canvas.width = window.innerWidth - 100;
// 	canvas.height = window.innerHeight - 100;
// })

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

// let hue = 0;
// const particlesArray = [];
// const mouse = {
// 	x: null,
// 	y: null,
// }




// class Particle{
// 	constructor(x, y, size){
// 		this.x = x;
// 		this.y = y;
// 		this.size = size;
// 		this.color = `hsla(${hue}, 100%, 50%)`;

// 	}

// 	drawParticle(){
// 		ctx.beginPath();
// 		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
// 		ctx.strokeStyle = this.color;
// 		ctx.stroke();
// 		ctx.closePath();

// 	}
// 	moveParticle(){
// 		this.size += 2;
// 		hue += 0.006;
// 		this.alpha -= 0.1;
// 		// console.log(this.hue);

// 	}
// }


// // window.addEventListener("mousemove", createParticle)

// function createParticle(e){
// 	mouse.x = e.x;
// 	mouse.y = e.y;
// 	const newParticle = new Particle(mouse.x, mouse.y, 20, hue);
// 	particlesArray.push(newParticle);
// 	console.log(particlesArray.length);

// }

// function checkParticlesArray(){
// 	if(particlesArray.length > 0){
// 		for(let i=0; i < particlesArray.length; i++){
// 			if(particlesArray[0].size > canvas.width - 400){
// 				particlesArray.shift();

// 			}
// 		}

// 	}
	
// }


// function animate(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);



// 	checkParticlesArray();

// 	particlesArray.forEach(particle => {
// 		particle.drawParticle();
// 		particle.moveParticle();
// 	})

// 	requestAnimationFrame(animate);
// }

// animate();
/*************  mouse move circle animation end **********/
/***********************************************************/




// let  hue = Math.floor(Math.random() * 361);
// let angle = 0;
// let radius = 1;
// let number = 1;

// function initProperties(){
// 	hue = Math.floor(Math.random() * 361);
// 	angle = 0;
// 	radius = 1;
// 	number = 1;

// }

// function drawCircle(){

// 	const x = canvas.width / 2 + radius * Math.sin(angle);
// 	const y = canvas.height / 2 + radius * Math.cos(angle);



// 	ctx.beginPath();
// 	ctx.arc(x, y, 15, 0, Math.PI * 2, true);
// 	ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
// 	ctx.strokeStyle = "gold";
// 	ctx.stroke();
// 	ctx.fill();
// 	ctx.closePath();

// 	number += 1;
// 	hue += 2;
// 	// radius = radius + (radius) / (number * 1.15);
// 	radius = 10*Math.sqrt(number * 1.1);

// 	// angle = angle +  Math.PI * 5/radius;
// 	// angle = angle + 10 *  4/ number;
// 	// angle++;
// 	angle += 1/2;

// }





// function animate(){
// 	drawCircle();
// 	requestAnimationFrame(animate);

// }
// animate();

// console.log(window.innerHeight);
// console.log(canvas.height);

// setInterval(() => {
// 	ctx.clearRect(0,0, canvas.width, canvas.height);
// 	initProperties();

// },10000);


/*************  yavavils dasasruli animation end **********/
/***********************************************************/





// var rectWidth = 150;
// var rectHeight = 75;

// // ctx.translate(canvas.width / 2, canvas.height / 2);


// ctx.fillStyle = 'blue';
// ctx.fillRect(10, 20, rectWidth, rectHeight);

// ctx.fillStyle = "red";
// ctx.fillRect(200,10,50,50);

// ctx.fillStyle = "green";
// ctx.fillRect(0,0,50,50);

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(canvas.width/2, canvas.height/2, 5, 5);
// ctx.fill();
// ctx.closePath();

// function  rotate(){
// 	ctx.rotate(Math.PI / 4);
// 	ctx.beginPath();
// 	ctx.rect(200,100, 40,50);
// 	ctx.fillStyle = "purple";
// 	ctx.fill();
// 	ctx.closePath();

// }




// ctx.beginPath();

// ctx.rect(300,300, 40,50);

// ctx.fillStyle = "yellow";

// ctx.fill();

// ctx.closePath();

// rotate();


let width = 100;
let height = 100;

function drawRectInCenter(){

	ctx.beginPath();
	ctx.rect(canvas.width/2 - width/2 ,canvas.height/2 - height/2, width, height);
	// ctx.fillStyle = "yellow";
	// ctx.fill();
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();


}

function drawRectInCorner(){
	ctx.beginPath();
	ctx.rect(-width/2 , -height/2, width, height);
	// ctx.fillStyle = "yellow";
	// ctx.fill();
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();

}
drawRectInCenter();

// ctx.translate(-canvas.width/2,-canvas.height/2)
// // ctx.translate(canvas.width / 2, canvas.height / 2);
// drowRect();
// ctx.rotate(Math.PI/4);
// drowRect();



// ctx.translate(12,20);
// ctx.translate(canvas.width / 2 -width/2, canvas.height / 2 - height/2);
ctx.translate(canvas.width / 2 , canvas.height / 2);
ctx.rotate(Math.PI/10);
drawRectInCorner();






// ctx.translate(canvas.width / 2 , canvas.height / 2);
// ctx.rotate(Math.PI/10);


function fillCanvas(){
	drawRectInCorner();
	ctx.beginPath();
	ctx.fillStyle = "#" + (Math.random() * 0xffffff<<0).toString(16).padStart(6, "0");
	ctx.fillRect(0,0, canvas.width, canvas.height);
	ctx.closePath();

}

function rotate(){
	ctx.rotate(Math.PI/100);

}


fillCanvas();

rotate();
rotate();






// for(let i=0; i<0; i++){

// 	rotate();
// 	fillCanvas();

// }








