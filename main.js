const colorInput = document.querySelector(".color-input");
const colorConverterBtn = document.querySelector(".color-converter-btn");
const colorForm = document.querySelector(".color-form");
const convertedColorDiv = document.querySelector(".converted-color");

let rgbaWhite = "rgba(0, 0, 0, 0)";
let hexWhite = "#ffffff";
let rgbWhite = "rgb(0, 0, 0)";

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

        showConvertedColor(convertedColor);

        return;
    }

    const div = document.createElement("div");
    div.style.height = "400px";
    div.style.width = "400px";
    div.style.backgroundColor = color;
    div.innerText = "dsdssd";
    document.body.querySelector(".container").append(div);
    const divColor = getComputedStyle(div).getPropertyValue("background-color");
    document.body.querySelector(".container").removeChild(div);
    console.log("div color: ::: ", divColor);

    if(divColor === rgbaWhite){
        return showError("Please Enter valid color name");
    }

    if(color.slice(0,1) === "#"){
        
        const convertedColor = {
            hex: color,
            rgba: divColor.slice(0,3) + "a" + divColor.slice(3,divColor.length - 1) + ", 1)",
            rgb: divColor,

        };

        showConvertedColor(convertedColor);

        return;
    }else if( color.slice(0,1) === "r"){
        let hexColor;
        let rgbColor;
        let rgbaColor;

        const x = color.indexOf("(");
        const y = color.indexOf(")");
        let  parsedColor = color.slice(x + 1, y);


        let arr = parsedColor.split(",").map(str => str.trim());

       
   

        let hexR = Number(arr[0]).toString(16);
        let hexG = Number(arr[1]).toString(16);
        let hexB = Number(arr[2]).toString(16);
        hexColor = "#" + hexR + hexG + hexB;

        if(arr.length === 4){
            alpha = arr[arr.length - 1];
            rgbaColor = color;
            rgbColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;

        }else{
            rgbColor = color;
            rgbaColor = `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, 1)`;

        }
        console.log(rgbaColor);
        console.log(hexColor);
        console.log(rgbColor);


        const convertedColor = {
            hex: hexColor,
            rgba: rgbaColor,
            rgb: rgbColor,

        };

        showConvertedColor(convertedColor);

        return;


       
    }else if(color.slice(0,1) === "h"){
    }


}

function showConvertedColor(convertedColor){
    const hexP = document.createElement("p");
    const rgbaP = document.createElement("p");
    const rgbP = document.createElement("p");

    hexP.innerText = "Hex code: " + convertedColor.hex;
    rgbaP.innerText = "rgba code: " + convertedColor.rgba;
    rgbP.innerText = "rgb code: " + convertedColor.rgb;


    hexP.style.backgroundColor = convertedColor.hex;
    rgbaP.style.backgroundColor = convertedColor.rgba;
    rgbP.style.backgroundColor = convertedColor.rgb;

    convertedColorDiv.innerText = "";


    convertedColorDiv.append(hexP);
    convertedColorDiv.innerHTML += "<br>";

    convertedColorDiv.append(rgbaP);
    convertedColorDiv.innerHTML += "<br>";

    convertedColorDiv.append(rgbP);
    convertedColorDiv.innerHTML += "<br>";
    convertedColorDiv.innerHTML += "<br>";

}