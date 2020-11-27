const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");


//Add 
function addTodoToFirestore(todo){
	db.collection("todos").add(todo).then(ress => {
		console.log("todo Added to firestore");
	})
}

// Get
function getFirestoreData(){

	db.collection("todos").get().then(collection => {
		collection.docs.forEach(doc => {
			console.log(doc.data());
		})
	})
}

// Delete
function deleteTodoFromFirestore(id){
	db.collection("todos").doc(id).delete().then(ress => console.log("deleted"));
}

// getFirestoreData();
// deleteTodoFromFirestore();


// Snapshot 
db.collection("todos").orderBy("number").onSnapshot(snapshot => {
	snapshot.docChanges().forEach(change => {
		const doc = change.doc;
		if(change.type === "added"){
			console.log("added");
			addTodoToUi(doc.data(), doc.id);


		}else if(change.type === "removed"){
			console.log("removed");
			removeTodoFromUi(doc.id);
		}

	})
})

//Form Events
todoForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const todo = todoForm.todo.value.trim();



	const room = Math.random() - 0.5 > 0 ? "room AA" : "room BB";
	let number = Array.from(todoList.children).length++;
	const created_at = firebase.firestore.Timestamp.fromDate(new Date());
	console.log(created_at);

	addTodoToFirestore({todo, room, number, created_at});


	todoForm.reset();

})
//Todo List events 
todoList.addEventListener("click", (e) => {
	if(e.target.tagName === "BUTTON"){
		const id = e.target.parentElement.dataset.id;
		deleteTodoFromFirestore(id)
	}
})


//Add todo to ui
function addTodoToUi(todo, id){
	const li = document.createElement("li");
	li.classList.add("list-group-item");
	li.setAttribute("data-id", id);
	console.log(todo);

	// const html = `
	// 		<span class="todo-task">${todo.todo}</span>
	// 		<span class="todo-date">
	// 		${todo.created_at.toDate().getHours()} :
	// 		${todo.created_at.toDate().getMinutes()}:
	// 		${todo.created_at.toDate().getSeconds()}
	// 		 </span>
	// 		<button class="btn btn-danger btn-sm">del</button>
	// `;
	const when = dateFns.distanceInWordsToNow(
            todo.created_at.toDate(),
            {addSuffix:true}

        );

	const html = `
			<span class="todo-task">${todo.todo}</span>
			<span class="todo-date">${when} </span>
			<button class="btn btn-danger btn-sm">del</button>
	`;

	li.innerHTML = html;

	todoList.firstElementChild ? 
	todoList.insertBefore(li, todoList.firstElementChild) :
	todoList.append(li);
}

//Remove todo from Ui
function removeTodoFromUi(id){
	Array.from(todoList.children).forEach(li => {
		if(li.dataset.id === id){
			li.remove();		
		}
	})

}