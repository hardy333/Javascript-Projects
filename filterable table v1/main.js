const tableTrs = document.querySelectorAll(".filterable-table tbody tr");
const table = document.querySelector(".filterable-table");
const arrow = document.querySelector(".filterable-table thead i");

//fetch data and then clss fillTable 
window.onload = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(ress => fillTabe(ress.data));
}

// sorting arrow event listener;
arrow.addEventListener("click", () => {
    arrow.classList.toggle("down");

    
    const tableData = getTableData(table);


    let  sortedData;
    arrow.classList.contains("down") ?  
        sortedData = sortDataDown(tableData, "id")
        : sortedData = sortDataUp(tableData, "id");



    console.log(sortedData);
    fillTabe(sortedData);
})


//exepts  any table and gets its data and creates array
function getTableData(table){
    const tableRows = Array.from(table.children[1].children);

    const tableData = tableRows.map(tr => {
        const obj = {};
        obj.id = tr.children[0].textContent;
        obj.name = tr.children[1].textContent;
        obj.username = tr.children[2].textContent;
        obj.email = tr.children[3].textContent;
        return obj;
    })
    
    return tableData;
}



// exapts array of objects with tr data and sorts it 
const sortDataDown = (data, property) => data.sort((a,b) => b[property] - a[property]);
const sortDataUp = (data, property) => data.sort((a,b) => a[property] - b[property]);






// exepts array of objects - with tr data and , fills table. 
function fillTabe(data){
    const trData  = data.map(user =>{
        return `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
        `;
    });

    const tbody = document.createElement("tbody");
    trData.forEach(tr => tbody.innerHTML += tr);

    if(table.children[1]){
         table.replaceChild(tbody, table.children[1]);

    }else{
        table.appendChild(tbody);
    }
}