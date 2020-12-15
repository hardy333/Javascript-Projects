const container = document.querySelector(".container");

const boxArr = [];
let  cols = 15;
let  rows = 15;

for(let i = 0; i < rows; i++){
    boxArr.push([]);
    for(let j = 0; j < cols; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        boxArr[i].push(box);
        container.appendChild(box);
    }
}
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("box")){

        let [i,j] = findPosOfBox(e.target);

        startAnimation(i,j);
    }
})

function findPosOfBox(box){
    let i;
    let j;
    boxArr.forEach((subArr, index) => {
        if(subArr.includes(box)){
            i = index;
            j = subArr.indexOf(box);
        }
    })

    return [i,j];
}


function startAnimation(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

            setTimeout(() => {
                startAnimation(i - 1, j);
                startAnimation(i, j - 1);
                startAnimation(i + 1, j);
                startAnimation(i, j + 1);
                
            }, 100);

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);



        }
    }
}