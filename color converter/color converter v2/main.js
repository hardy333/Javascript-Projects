const colorInput = document.querySelector(".color-input");
const colorConverterBtn = document.querySelector(".color-converter-btn");
const colorForm = document.querySelector(".color-form");
const convertedColorDiv = document.querySelector(".converted-color");

let rgbaWhite = "rgba(0, 0, 0, 0)";
let hexWhite = "#ffffff";
let rgbWhite = "rgb(0, 0, 0)";

let alpha = 1;

colorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = colorInput.value.trim();
    if(value === ""){
        showError("Please enter color name");
        return;
    }

    convertColor(value);




    // colorInput.value = "";
})

function showError(errMessage){
    colorInput.classList.add("show-error");
    convertedColorDiv.innerText = errMessage;


    setTimeout(() => {
        colorInput.classList.remove("show-error");
        if(convertedColorDiv.innerText === errMessage){
             convertedColorDiv.innerText = "";
        }
    }, 2000);
    
}


function convertColor(color){

    if(color === rgbaWhite || color === hexWhite || color === rgbWhite){

        const convertedColor = {
            hex: hexWhite,
            rgba: rgbaWhite,
            rgb: rgbWhite,

        };

        showConvertedColors(convertedColor);

        return;
    }

     /* validate color, Start */
    const div = document.createElement("div");
    div.style.height = "400px";
    div.style.width = "400px";
    div.style.backgroundColor = color;
    div.innerText = "dsdssd";
    document.body.querySelector(".container").append(div);
    const divColor = getComputedStyle(div).getPropertyValue("background-color");
    document.body.querySelector(".container").removeChild(div);
    // console.log("div color: ::: ", divColor);



    if(divColor === rgbaWhite){
        return showError("Please Enter valid color name");
    }
    /* validate color, End */



    /***************************************** */
    /***************************************** */
    /***************************************** */

    if(color.includes("#")){
        alpha = 1;
        if(color.length === 4){
            color = color + color.slice(1,color.length); 
        }

        let rgb = hex_to_rgb(color);
        
        const convertedColor = {
            hex: color,
            rgb: rgb,
            rgba: rgb_to_rgba(rgb),
            hsl: rgb_to_hsl(rgb),
            hsla:rgb_to_hsla(rgb),


        };

        showConvertedColors(convertedColor);

        return;
    }
    if(color.includes("rgba")){
        let a = color.lastIndexOf(",");
        let b = color.lastIndexOf(")");
        alpha = color.slice(a + 1, b);

        let rgb = rgba_to_rgb(color);

        const convertedColor = {
            hex: rgb_to_hex(rgb),
            rgb: rgb,
            rgba: color,
            hsl: rgb_to_hsl(rgb),
            hsla:rgb_to_hsla(rgb),


        };

        showConvertedColors(convertedColor);

        return;


    }

    if(color.includes("rgb") && !color.includes("rgba")){
        let rgb = color;
        const convertedColor = {
            hex: rgb_to_hex(rgb),
            rgba: rgb_to_rgba(rgb),
            rgb: color,
            hsl: rgb_to_hsl(rgb),
            hsla:rgb_to_hsla(rgb),


        };

        showConvertedColors(convertedColor);

        return;


       
    }
    if(color.includes("hsla")){
        let a = color.lastIndexOf(",");
        let b = color.lastIndexOf(")");
        alpha = color.slice(a + 1, b);

        let rgb = hsla_to_rgb(color);

        const convertedColor = {
            hex: rgb_to_hex(rgb),
            rgba: rgb_to_rgba(rgb),
            rgb: rgb,
            hsl: hsla_to_hsl(color),
            hsla:color
        };

        showConvertedColors(convertedColor);

        return;

    }

    if(color.includes("hsl") && !color.includes("hsla")){
        let rgb = hsl_to_rgb(color);

        const convertedColor = {
            hex: rgb_to_hex(rgb),
            rgba: rgb_to_rgba(rgb),
            rgb: rgb,
            hsl: color,
            hsla:hsl_to_hsla(color),
        };

        showConvertedColors(convertedColor);

        return;

    }


}
/****  xxx to ---->>> rgb, start ****/
function  hex_to_rgb(hex){

    let parsedHex = hex.slice(1, hex.length);

    let r = parseInt(parsedHex.slice(0,2),16);
    let g = parseInt(parsedHex.slice(2,4),16);
    let b = parseInt(parsedHex.slice(4,6),16);


    return `rgb(${r}, ${g}, ${b})`;



}




function rgba_to_rgb(rgba){
    let x = rgba.lastIndexOf(",");

    return rgba.slice(0,x) +  ")";
    

}


function hsl_to_rgb(hsl){
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



function cmyk_to_rgb(cmyk){


}

function hsla_to_rgb(hsla){

    return hsl_to_rgb(hsla_to_hsl(hsla));
}






/****  xxx to ---->>> rgb, end ****/




/****  xxx to ---->>>> xxxx  strat   ***/
function hsla_to_hsl(hsla){
    let x = hsla.indexOf("(");
    let y = hsla.lastIndexOf(",");
    let parsedHsla = hsla.slice(x + 1, y);

    return "hsl(" + parsedHsla + ")";
}
function hsl_to_hsla(hsl){
    let x = hsl.indexOf("(");
    let y = hsl.lastIndexOf(")");
    let parsedHsl = hsl.slice(x + 1, y);

    // return "hsl(" + parsedHsla + ")";

    return "hsla(" + parsedHsl + `, ${alpha})`;
}
/****  xxx to ---->>>> xxxx  end ***/




/**** rgb to ---->>> xxx, start ****/
function  rgb_to_hex(rgb){

    const x = rgb.indexOf("(");
    const y = rgb.indexOf(")");
    let  parsedColor = rgb.slice(x + 1, y);


    let arr = parsedColor.split(",").map(str => str.trim());

   


    let hexR = Number(arr[0]).toString(16).padStart(2,"0");
    let hexG = Number(arr[1]).toString(16).padStart(2,"0");
    let hexB = Number(arr[2]).toString(16).padStart(2,"0");

    return "#" + hexR + hexG + hexB;
    

}

function rgb_to_rgba(rgb){
    return  rgb.slice(0,3) + "a" + rgb.slice(3, rgb.length - 1) + `, ${alpha})`;
}


function rgb_to_hsl(rgb){
    let h;
    let s;
    let l;

    let x = rgb.indexOf("(");
    let y = rgb.indexOf(")");

    let parsedRgb = rgb.slice(x + 1, y);

    let arr = parsedRgb.split(",").map(str => str.trim());

    let r = arr[0];
    let g = arr[1];
    let b = arr[2];


    let _r =  r / 255;
    let _g =  g / 255;
    let _b =  b / 255;


    let max = Math.max(_r, _g, _b);
    let min = Math.min(_r, _g, _b);
    let dif = max - min;


    l = (max + min) / 2;

    if(dif === 0){
        s = 0;
    }else{
        s = dif / (1 - Math.abs(2*l - 1));
    }


    if(dif === 0){
        h = 0;
    }else if(max === _r){
        h = 60 * ( ((_g - _b) / dif) % 6 );
    }else if(max === _g){
        h = 60 * ( ((_b - _r) / dif) + 2 );

    }else if(max === _b){
        h = 60 * ( ((_r - _g) / dif) + 4 );

    }


  
    // h will always be [-1,1]  so h + 360 will be positive 
    let H = ((h + 360) % 360).toFixed(1);
    // l and s always will be positive,
    // but we neet to get percent so we multiply by 100% 
    let S = (s * 100).toFixed(1);
    let L = (l * 100).toFixed(1);

    // % and spacing between "," and number is not neccessery 
    return `hsl(${H}, ${S}%, ${L}%)`;
}

function rgb_to_hsla(rgb){

    return hsl_to_hsla(rgb_to_hsl(rgb));
}

function rgb_to_cmyk(){



}
/**** rgb to ---->>> xxx,  end ****/





// display results to page
function showConvertedColors(convertedColors){
    // const hexP = document.createElement("p");
    // const rgbaP = document.createElement("p");
    // const rgbP = document.createElement("p");
    // const hslP = document.createElement("p");
    // const hslaP = document.createElement("p");

    // hexP.innerText = "Hex code: " + convertedColor.hex;
    // rgbaP.innerText = "rgba code: " + convertedColor.rgba;
    // rgbP.innerText = "rgb code: " + convertedColor.rgb;
    // hslP.innerText = "hsl code: " + convertedColor.hsl;
    // hslaP.innerText = "hsla code: " + convertedColor.hsla;


    // hexP.style.backgroundColor = convertedColor.hex;
    // rgbaP.style.backgroundColor = convertedColor.rgba;
    // rgbP.style.backgroundColor = convertedColor.rgb;
    // hslP.style.backgroundColor = convertedColor.hsl;
    // hslaP.style.backgroundColor = convertedColor.hsla;

    convertedColorDiv.innerText = "";


    // convertedColorDiv.append(hexP);
    // convertedColorDiv.innerHTML += "<br>";

    // convertedColorDiv.append(rgbaP);
    // convertedColorDiv.innerHTML += "<br>";

    // convertedColorDiv.append(rgbP);
    // convertedColorDiv.innerHTML += "<br>";

    // convertedColorDiv.append(hslP);
    // convertedColorDiv.innerHTML += "<br>";

    // convertedColorDiv.append(hslaP);
    // convertedColorDiv.innerHTML += "<br>";
    
    // convertedColorDiv.innerHTML += "<br>";

    for(let key in convertedColors){
        const p = document.createElement("p");
        const button = document.createElement("button");
        const span = document.createElement("span");
        const childSpan = document.createElement("span");
        button.classList.add("copy-btn");
        button.innerText = "Copy";
        span.innerHTML = `<b>${key}</b> code is: `;
        childSpan.innerHTML = `<strong> ${convertedColors[key]}</strong>`;

        span.appendChild(childSpan);

        p.style.backgroundColor = convertedColors[key];

        p.classList.add("color-p");
        p.appendChild(span);
        p.appendChild(button);

        
        convertedColorDiv.append(p);

        

        convertedColorDiv.innerHTML += "<br>";

    }
    
    convertedColorDiv.innerHTML += "<br>";


    

}

convertedColorDiv.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        copyColorCode(e.target);

    }
    // if(!e.target.classList.contains("converted-color")){
    //     copyColorCodeFromP(e.target);
    // }

})

function copyColorCode(button){
    button.classList.add("active-btn");


    const childSpan = button.previousElementSibling.querySelector("span");
    const color = childSpan.innerText;
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.value = color;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    setTimeout(() => {
        button.classList.remove("active-btn");
        
    }, 400);


}

// function copyColorCodeFromP(p){
//     const childSpan = p.querySelector("span").querySelector("span");
//     const color = childSpan.innerText;
//     console.log(color);
// }


document.addEventListener("DOMContentLoaded", () => {
    colorInput.value = "hsl(56,94.9%,53.9%)";
    colorConverterBtn.click();
}) 

let start = false;
let startColorChange = false;

window.addEventListener("keypress", (e) => {
    // if(e.keyCode === 13){
    //     const randColor = "#" + Math.floor(Math.random()*Math.pow(256,3)).toString(16).padStart(6,"0");
    //     colorInput.value = randColor;
    //     colorConverterBtn.click();
    // }
   
})

window.addEventListener("keydown", (e) => {
    if(e.ctrlKey){
        start = true;
        startColorChange = true;

    }
    if(start && e.key === "v"){
        const input = document.createElement("input");
        colorInput.select();
        console.log(document.execCommand("paste"));

    }
    if(startColorChange && e.keyCode === 32){
        const randColor = "#" + Math.floor(Math.random()*Math.pow(256,3)).toString(16).padStart(6,"0");
        colorInput.value = randColor;
        colorConverterBtn.click();

    }  

})
window.addEventListener("keyup", (e) => {
   if(e.ctrlKey){
       start = false;
       startColorChange = false;
   }
   
})