window.onload = () => {
    const table = document.querySelector(".myTable");

    function fetchData(){
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(ress => ress.json())
            .then(ress => {
              let tBody = ress.map(todo => {
                    return `    
                    <tr>
                        <td>${todo.userId}</td>
                        <td>${todo.id}</td>
                        <td>${todo.title.slice(0,6)}</td>
                        <td>${todo.completed}</td>
                    </tr>
                    `;
                })
                tBody.forEach(tr => {
                    table.querySelector("tbody").innerHTML += tr;
                })

                initDataTable(table);
            });
    }

    fetchData();
}
function initDataTable(){
    $('.myTable').DataTable();

}