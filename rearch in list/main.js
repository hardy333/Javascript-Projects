const list = document.querySelector(".myList");
const searchInput = document.querySelector("#search-input");

(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(ress => ress.json())
        .then(ress => {

            let result = "";
            ress.forEach(item => {
                result += `<li>${item.title}</li>`;
            })
            list.innerHTML = result;
        })

})();

searchInput.addEventListener("keyup", (e) => {

   
    let searchArray = e.target.value.trim().split(" ");
    console.log(searchArray);

    Array.from(list.children).forEach(li => {
        
        function testLi(text, array){
            let contains = false;

            array.forEach(word => {
                if(text.includes(word)) contains = true;
            })
            return contains;
        }
        
        if(testLi(li.innerText.trim(), searchArray)){
            li.style.display = "block";
        }else{
            li.style.display = "none";

        }
    })
})
const string = "hello there";
// console.log(string.includes("eare"));
