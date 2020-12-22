
/*********  wesbos checkbox problem solutions  start *********/
const checkList = document.querySelector(".checkbox-list");
const checkboxesNodeLit = document.querySelectorAll(".checkbox-list li input[type='checkbox']");
const checkboxes = Array.from(checkboxesNodeLit);

let prevChecked;

/*****************  FIRST SOLUTION  START *****************/ 

// const checkbetween = (check1, check2) => {
//     let check1Pos = checkboxes.indexOf(check1);
//     let check2Pos = checkboxes.indexOf(check2);

//     if(check1Pos > check2Pos){
//         let a = check1Pos;
//         check1Pos = check2Pos;
//         check2Pos = a;
//     }
//     checkboxes.forEach((check, index) =>{

//         if(index >= check1Pos &&  index <= check2Pos){
//             check.checked = true;
//         }

//     })

// }

// const handleClick = (e) => {

//     if(e.shiftKey  && e.target.checked){
//         console.log(prevChecked);
//         checkbetween(prevChecked, e.target);
//     }

//     if(e.target.tagName === "INPUT"){
//         prevChecked = e.target;
//     }
// }

/*****************  FIRST SOLUTION  END *****************/ 



/*****************  SECOND SOLUTION  START *****************/ 
const handleClick = (e) => {
    let between = false;

    if(e.target.checked && e.ctrlKey){

        checkboxes.forEach(checkbox => {

            if(checkbox === e.target || checkbox === prevChecked ){
                console.log(checkbox);
                between = !between;
            }

            if(between){
                checkbox.checked = true;
            }
        })

    }

    if(e.target.tagName === "INPUT"){
        prevChecked = e.target;
    }
}
/*****************  SECOND SOLUTION  END  *****************/ 


checkList.addEventListener("click", handleClick);
/*********  wesbos checkbox problem solutions  end *********/


