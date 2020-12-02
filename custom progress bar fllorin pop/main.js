const progressFull = document.querySelector(".progress-full");
const rangeValueH2 = document.querySelector(".range-value");
const range = document.querySelector("input[type='range']");
const checkbox = document.querySelector(".check-container input[type='checkbox']");
console.log(checkbox);

checkbox.addEventListener("change", () => {
    console.log(222);
})


let increment = 1;
let currentRangeValue = Number(range.value);

range.addEventListener("change", (e) => {

    updateRangeValue(Number(range.value));
    
    updateProgressBar(Number(range.value));
})

function updateRangeValue(newRangeValue){
    if(newRangeValue < currentRangeValue){
        increment = -1;
    }else{
        increment = 1;
    }
    
    let interval = setInterval(() => {
        currentRangeValue += increment;
        rangeValueH2.textContent = `${currentRangeValue}%`;
        if(currentRangeValue == newRangeValue){
            clearInterval(interval);
            return;

        }


    }, 300 / Math.abs(newRangeValue - currentRangeValue) );
}
function updateProgressBar(newRangeValue){
    progressFull.style.width = `${newRangeValue}%`;
}


// pirveli chatvirtvis shemdeg animacia 
window.onload = () => {
    let startingValue = 0;
    let rangeValue = 0;

    let interval = setInterval(() => {


        startingValue += 5;
        rangeValueH2.textContent = `${startingValue}%`;
        progressFull.style.width = `${startingValue}%`;

        if(startingValue == "70"){
            clearInterval(interval);
            return;

        }


    }, 30);

    let interval1 = setInterval(() => {
        rangeValue += 1;
        range.value = startingValue;

        if(rangeValue == "70"){
            clearInterval(interval1);
            return;

        }

    }, 30);
    
}