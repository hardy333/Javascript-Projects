const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();

// ctx.translate(100,100);
// ctx.rotate(10 * Math.PI/180);

// // ctx.fillStyle = "black";
// // ctx.fillRect(0,0,canvas.width,canvas.height);

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();


// ctx.translate(10,10);

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();


// function drawTree(startX,startY,len,angle,branchWidth,color1,color2){

// 	ctx.beginPath();
// 	ctx.save();
// 	ctx.strokeStyle=color1;
// 	ctx.fillStyle=color2;
// 	ctx.lineWidth=branchWidth;

// 	ctx.translate(startX,startY);
// 	ctx.rotate(angle*Math.PI/180);

// 	ctx.moveTo(0,0);
// 	ctx.lineTo(0,-len);
// 	ctx.stroke();



// 	if(len < 10){
// 		ctx.restore();
// 		return;

// 	}

// 	// drawTree(0,-len,len*0.75,angle+5,branchWidth);
// 	// drawTree(0,-len,len*0.75,angle-5,branchWidth);
// 	ctx.restore();

	
// }

// drawTree(canvas.width/2,canvas.height-80, 120, 0, 2, "red", "green");
// drawTree(canvas.width/2,canvas.height-80, 120, 0, 2, "red", "green");
// drawTree(canvas.width/2,canvas.height-80, 120, 0, 2, "red", "green");


// // drawTree(0,120, 120, 5, 2, "red", "green");

// ctx.save();

// 	ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();

// ctx.translate(100,100);
// ctx.rotate(10 * Math.PI/180);


// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();


// ctx.translate(10,10);

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();
// ctx.restore();


// ctx.save();

// 	ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();

// ctx.translate(100,100);
// ctx.rotate(10 * Math.PI/180);


// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);
// ctx.closePath();


// ctx.translate(10,10);

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(100,0,450,50);
// ctx.closePath();
// ctx.restore();

	








// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.fillRect(100,0,50,50);
// ctx.closePath();
let a = canvas.width/2;
let b = canvas.height/2;
let size = 200;
let angle = 0;
let hue = 0;
let increment = 5;
function drawTree(){


	ctx.save();

	ctx.translate(a ,b);
	ctx.rotate(angle*Math.PI/180);



	ctx.rect(-size/2,-size/2, size, size);
	// ctx.strokeStyle=`hsl(${hue},100%,50%)`;
	ctx.strokeStyle="black";

	ctx.stroke();



	ctx.restore();

	// size += 2*Math.sqrt(Math.abs(increment));
	size-= 10;
	angle += 1;
	hue ++;
	// if(hue > 20){
	// 	increment *= -1;
	// }

	
}
// let interval = setInterval(() => {
// 	drawTree();
// },1000/40);

// setTimeout(() => {
// 	clearInterval(interval);
// },20000);

function animate(){
	drawTree();
	requestAnimationFrame(animate);
}
// animate();

for(let i=0; i<100; i++){
	drawTree();


}






// ctx.translate(a,b);
// ctx.rotate(angle*Math.PI/180);

// ctx.rect(0,0, size, size);
// ctx.strokeStyle="black";
// ctx.stroke();
// ctx.closePath();