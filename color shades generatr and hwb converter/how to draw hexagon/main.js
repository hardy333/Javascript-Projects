const colorShade = (col, amt) => {
    col = col.replace(/^#/, '')
    if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]
  
    let [r, g, b] = col.match(/.{2}/g);
    ([r, g, b] = [Math.round(parseInt(r, 16) + amt), Math.round(parseInt(g, 16) + amt), Math.round(parseInt(b, 16) + amt)])
  
    r = Math.max(Math.min(255, r), 0).toString(16)
    g = Math.max(Math.min(255, g), 0).toString(16)
    b = Math.max(Math.min(255, b), 0).toString(16)
  
    const rr = (r.length < 2 ? '0' : '') + r
    const gg = (g.length < 2 ? '0' : '') + g
    const bb = (b.length < 2 ? '0' : '') + b
  
    return `#${rr}${gg}${bb}`
  }



function colorShades(red,green,blue){
    let max = Math.max(red,Math.max(green,blue));
    var step = 255 / (max * 5)

    

    for(let i = 0; i <= 10; i++){
        const box = document.createElement("div");
        box.classList.add("box");


        let r = i * red * step;
        let g = i * green * step;
        let b = i * blue * step;
    
        

        box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        document.body.append(box);

        console.log(getComputedStyle(box).getPropertyValue("background-color"));
        

    }



}
// colorShades(200,-20,100);

const div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100px";
div.style.backgroundColor = "RGB(100, 20, 30)";
div.style.margin = "5px";
document.body.append(div);



const div2 = document.createElement("div");
div2.style.width = "100%";
div2.style.height = "100px";
div2.style.backgroundColor = "RGB(100, 20, 30)";
div2.style.margin = "5px";
document.body.append(div2);


let hwbColor = rgbToHwb("RGB(100, 20, 30)");
let rgb = hwbToRgb(hwbColor.color);
console.log(rgb);
console.log(hwbColor);
// document.body.style.backgroundColor = rgb;


for(let  i = 0; i <= 10; i++){
    const box = document.createElement("div");
    box.classList.add("box");
 
    box.style.backgroundColor = 
        hwbToRgb(`hwb(${hwbColor.H}, ${+hwbColor.W  + i * 10}%, ${hwbColor.B}%)`);


    document.body.append(box);

}



// for(let  i = 0; i <= 10; i++){
//     const box = document.createElement("div");
//     box.classList.add("box");
 
//     box.style.backgroundColor = colorShade("#12aba6",  -10 * i );

//     document.body.append(box);

// }



function rgbToHwb(rgb) {
    let x = rgb.indexOf("(");
    let y = rgb.indexOf(")");

    let parsedRgb = rgb.slice(x + 1, y);

    let arr = parsedRgb.split(",").map(str => str.trim());

    let r = arr[0];
    let g = arr[1];
    let b = arr[2];

    let hsl = rgbToHsl(rgb);
    let index1 = rgbToHsl(rgb).indexOf("(");
    let index2 = rgbToHsl(rgb).indexOf(",");

    let H = hsl.slice(index1 + 1, index2);

    let W = 1 / 255 * Math.min(r, Math.min(g, b));

    let B = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

    W = (W * 100).toFixed(0);
    B = (B * 100).toFixed(0); 

    return {
        color: `hwb(${H}, ${W}%, ${B}%)`,
        H,
        W,
        B
    };
}

function hwbToRgb(hwb){
    let x = hwb.indexOf("(");
    let y = hwb.lastIndexOf(")");

    let parsedHwb = hwb.slice(x + 1, y);
    parsedHwb = parsedHwb.replace(/%/g, "");

    let arr = parsedHwb.split(",").map(str => Number(str.trim()));

  

    // console.log(h,w,b);
    // console.log(parsedHwb);

    let h = arr[0] / 360;
    let wh = arr[1] / 100;
    let bl = arr[2] / 100;

    // let ratio = w + b;

    // let i,v,f,n;

    // if(ratio > 1){
    //     w /= ratio;
    //     h /= ratio;
    // }

    // i = Math.floor(6 * h);
    // v = 1 - bl;
    // f = 6 * h - i;

    var ratio = wh + bl;

    var i, v, f, n;

    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }

    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;

    if ((i & 0x01) !== 0) {
        f = 1 - f;
    }

    n = wh + f * (v - wh);

    var r, g, b;

    switch (i) {
        default:
        case 6:
        case 0: r = v; g = n; b = wh; break;
        case 1: r = n; g = v; b = wh; break;
        case 2: r = wh; g = v; b = n; break;
        case 3: r = wh; g = n; b = v; break;
        case 4: r = n; g = wh; b = v; break;
        case 5: r = v; g = wh; b = n; break;
    }

    r = (r * 255);
    g = (g * 255);
    b = (b * 255);


    r = r.toFixed(0);
    g = g.toFixed(0);
    b = b.toFixed(0);


    return `rgb(${r}, ${g}, ${b})`;

}


/*************************************************************/



// let rgb = "rgb(110,40,30)"
// let hwb = rgbToHwb(rgb);

// console.log(rgbToHsl(rgb));
// console.log(hwb);





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



function hslToRgb(hsl){
    let i = hsl.indexOf("(");
    let j = hsl.lastIndexOf(")");
    let parsedHsl = hsl.slice(i + 1, j);


    let arr = parsedHsl.split(",").map(str => {
        return Number(str.trim().split("%")[0]);
    })

    let h = arr[0];
    let s = arr[1] / 100;
    let l = arr[2] / 100;

    let c = (1 - Math.abs(2*l - 1)) * s;
    let x = c * (1 - Math.abs( (h / 60 ) % 2 -1 ));
    let m = l - c / 2;

    let r,g,b;
    let R,G,B;

    if(h <= 60){
        [r,g,b] = [c,x,0];
    }else if(h <= 120){
        [r,g,b] = [x,c,0];
    }else if(h <= 180){
        [r,g,b] = [0,c,x];
    }else if(h <= 240){
        [r,g,b] = [0,x,c];
    }else if(h <= 300){
        [r,g,b] = [x,0,c];
    }else if(h <= 360){
        [r,g,b] = [c,0,x];
    }

    R = (r + m) * 255;
    G = (g + m) * 255;
    B = (b + m) * 255;

    return `rgb(${R.toFixed(0)}, ${G.toFixed(0)}, ${B.toFixed(0)})`;

}


// console.log(rgbToHsl("rgb(100, 20, 30)"));
// console.log(hslToRgb("hsl(353, 67%, 24%)"));


// document.body.style.backgroundColor = "hsl(353, 67%, 24%)";

// const x = getComputedStyle(document.body)
//     .getPropertyValue("background-color");

// console.log(x);


