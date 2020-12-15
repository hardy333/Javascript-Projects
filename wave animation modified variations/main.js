const container = document.querySelector(".container");

let x;
let y;

let cols = 20;
let rows = 20;
const boxArr = [];
const boxArrForCss = [];

for(let i = 0; i < cols; i++){
    boxArr.push([]);
    for(let j = 0; j < rows; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        // box.addEventListener("click", () => showAnimation(i,j));

        
        boxArr[i].push(box);
        // container.appendChild(box);
        
        
    }
}
boxArr.forEach((subArr, index) => {
    const div = document.createElement("div");
    div.classList.add("sub-container");
    boxArrForCss.push(div);
    subArr.forEach(box => {
        div.append(box);
    })
    container.append(div);

})

container.addEventListener("click", startAnimationProcess);

function startAnimationProcess(e){
    if(e.target.classList.contains("box")){
        let [i,j] = findPos(e.target);
            [x,y] = [i,j];
        /******************************************************/
        // showAnimation_rect_down_right(i,j);
        // showAnimationAB(i,j);
        showAnimationXY(i,j);
        // showAnimationXY(i,j);
        // showAnimationA(i,j);
        // showAnimationB(i,j);
        // showAnimationStandart(i,j);

        container.removeEventListener("click", startAnimationProcess);
        setTimeout(() => {
            container.addEventListener("click", startAnimationProcess);
            
        }, 300);
    }
}

function findPos(box){
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
function showAnimationStandart(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationStandart(i - 1, j);
                showAnimationStandart(i, j - 1);
                showAnimationStandart(i, j + 1);
                showAnimationStandart(i + 1, j);

            }, 100);
      

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}

function showAnimationX(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                // showAnimationX(i - 1, j);
                // showAnimationX(i + 1, j);
                showAnimationX(i, j - 1);
                showAnimationX(i, j + 1);

            }, 100);
      

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}

function showAnimationY(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationY(i - 1, j);
                showAnimationY(i + 1, j);
               

            }, 100);
         
            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}


function showAnimationA(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationA(i - 1, j - 1);
                showAnimationA(i + 1, j + 1);
               

            }, 100);
          

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}

function showAnimationB(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationB(i + 1, j - 1);
                showAnimationB(i - 1, j + 1);
               

            }, 100);
          
            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}
function showAnimationAB(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationAB(i + 1, j - 1);
                showAnimationAB(i - 1, j + 1);
               

            }, 100);
          
            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationAB(i - 1, j - 1);
                showAnimationAB(i + 1, j + 1);
               

            }, 100);
          

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}

function showAnimationXY(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow") &&
            (i === x || j === y)
        ){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimationXY(i + 1, j);
                showAnimationXY(i - 1, j);
                showAnimationXY(i, j - 1);
                showAnimationXY(i, j + 1);
               

            }, 100);
            

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}

function showAnimation_rect_down_right(i,j){
    if(boxArr[i] && boxArr[i][j]){
        if(!boxArr[i][j].classList.contains("grow")
        ){
            boxArr[i][j].classList.add("grow");

             const timer = setTimeout(() => {
                showAnimation_rect_down_right(i, j + 1);
                showAnimation_rect_down_right(i + 1, j);
                // showAnimationAB(i - 1, j - 1);
                // showAnimationAB(i + 1, j - 1);
                // showAnimationAB(i - 1, j + 1);
               

            }, 100);
            

            setTimeout(() => {
                boxArr[i][j].classList.remove("grow");
                
            }, 300);
        }
    }
}