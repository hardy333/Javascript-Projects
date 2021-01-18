const image = document.querySelector(".img");
const donwloadBtn = document.querySelector("button");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


donwloadBtn.addEventListener("click", () =>{
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "name123.png";
    document.body.appendChild(a);
    a.href = url;
    a.click();
})


ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);






const img1 = new Image();
img1.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
console.log(img1);
document.body.append(img1);
window.onload = () => {
    ctx.drawImage(image,0,0);
    // if we add this drawImage() method which draws image from url then we will not be able to download canvas image 
    // ctx.drawImage(img1,100,100);
    
}