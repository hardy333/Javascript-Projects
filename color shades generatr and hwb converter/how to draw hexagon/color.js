
const compColor = (color) => {
    const parsedColor = color.slice(1,color.length);
    const num = parseInt(parsedColor,16);
    const num1 = parseInt("ffffff",16);
    const x = num1 - num;

    const res = (x.toString(16)).padStart(6,"0");

    return "#" + res;
}


function fetchColors(){
    fetch("colors.txt")
        .then(res => res.text())
        .then(res => getColors(res));

}

fetchColors();


function getColors(colors){
    document.body.innerHTML = "";
    const hexColors = colors.split("\n")
        .map(hex => hex.trim())
        .filter(hex => hex.charAt(0) === "#");



    const rgbColors = hexColors.map(hex => {
        return hexToRgb(hex);
    })



    function  hexToRgb(hex){


        let parsedHex = hex.replace(/^\#/,"");
    
        let r = parseInt(parsedHex.slice(0,2),16);
        let g = parseInt(parsedHex.slice(2,4),16);
        let b = parseInt(parsedHex.slice(4,6),16);
    
    
        return `rgb(${r}, ${g}, ${b})`;
    
    
    }
    
    function createColorBox(color){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = color;
        document.body.append(box);
    
    }
    
    
    const myRgbArr = [];
    
    function blackTones(r,g,b){
        let stepR = (r / 10);
        let stepG = (g / 10);
        let stepB = (b / 10);
    
        for(let i = 0; i <= 10; i++){
            let color = `rgb(${Math.floor( stepR * i)}, ${Math.floor( stepG * i)}, ${Math.floor( stepB * i)})`;   
            myRgbArr.push(color); 
        }
    
    
    
    }

    function lightTones(r,g,b){
        let stepR = ((255 - r) / 10);
        let stepG = ((255 - g) / 10);
        let stepB = ((255 - b) / 10);

        for(let i = 1; i <= 10; i++){

            let rr = Math.floor( r + stepR * i);
            let gg = Math.floor(g + stepG * i);
            let bb = Math.floor(b + stepB * i);


            let color = `rgb(${rr}, ${gg}, ${bb})`;

            myRgbArr.push(color); 
        }
    



    }
    
    
    blackTones(172, 226, 210);
    lightTones(172, 226, 210);



    rgbColors.forEach((col) => {
        createColorBox(col);
        // console.log(col);
    })


    

    const div = document.createElement("div");
    div.style.height = "30px";
    div.style.width = "100%";
    div.innerText  = "djsdkd";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);



  
    // console.log(myRgbArr.length);
    myRgbArr.forEach((col,index) => {
        createColorBox(myRgbArr[20 - index]);
        console.log(rgbToHex(col));
    })

    // console.log(hexToRgb("#ace2d2"));
 
    // rgbColors.forEach((col,index) => {
    //     console.log(col);
    // })




}

/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/********************************************************* */
/*********************************************************s */



function rgbToHsl(rgb){
    let h;
    let s;
    let l;

    let x = rgb.indexOf("(");
    let y = rgb.indexOf(")");

    let parsedRgb = rgb.slice(x + 1, y);

    let arr = parsedRgb.split(",").map(str => str.trim());

    let r = +arr[0];
    let g = +arr[1];
    let b = +arr[2];


    let _r =  r / 255;
    let _g =  g / 255;
    let _b =  b / 255;


    let max = Math.max(_r, _g, _b);
    let min = Math.min(_r, _g, _b);
    let dif = max - min;


    /* finding h  start */
    if(dif === 0){
        h = 0;
    }else if(max === _r){
        h = ((_g - _b) / dif) % 6;
    }else if(max === _g){
        h = ((_b - _r) / dif) + 2;

    }else if(max === _b){
        h = ((_r - _g) / dif) + 4;
    }

    h = Math.round(h * 60);
    if(h < 0) h += 360;
    /* finding h  end */



    /* finding l  start */
    l = (max + min) / 2;
    /* finding l  end */




    /* finding s  start */
    if(dif === 0){
        s = 0;
    }else{
        s = dif / (1 - Math.abs(2*l - 1));
    }
    /* finding s  end */


    l = +(l * 100).toFixed(0);
    s = +(s * 100).toFixed(0);



    return  `hsl(${h}, ${s}%, ${l}%)`;
}


function  rgbToHex(rgb){

    const x = rgb.indexOf("(");
    const y = rgb.indexOf(")");
    let  parsedColor = rgb.slice(x + 1, y);


    let arr = parsedColor.split(",").map(str => str.trim());

   


    let hexR = Number(arr[0]).toString(16).padStart(2,"0");
    let hexG = Number(arr[1]).toString(16).padStart(2,"0");
    let hexB = Number(arr[2]).toString(16).padStart(2,"0");

    return "#" + hexR + hexG + hexB;
    

}