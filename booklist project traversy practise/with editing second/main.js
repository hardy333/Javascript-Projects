class Book{
    constructor(title, author, ISBN){

        this.title = title,
        this.author = author;
        this.ISBN = ISBN;

    }

}

class UI{
    static displayBooks(books){
        const tBody = document.querySelector(".table-body");

        books.forEach(book => {
            this.addBook(book);
        })
    }

    static addBook(book){
        const tBody = document.querySelector(".table-body");

        const tr = document.createElement("tr");
        const html = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
            <td class="delete">
            <button class="btn btn-danger">X</button>
            <button class="btn btn-warning">edit</button>
            </td>
        `;
        tr.innerHTML = html;
        tBody.firstElementChild ? tBody.insertBefore(tr,tBody.firstElementChild): tBody.append(tr);
        
    }

    static removeBook(bookTr){
        bookTr.remove();
        
    }
    static showAlert(message, className){
        const alertDiv = document.querySelector(".alert-container");
        
        alertDiv.classList.add(`alert-${className}`);
        alertDiv.classList.add("alert");
        alertDiv.innerText = message;

        setTimeout(() => {
            this.removeAlert();

        }, 1200);
    }
    static removeAlert(){
        const alertDiv = document.querySelector(".alert-container");
        alertDiv.className = "alert-container ";
        alertDiv.innerText = "";
    }
}

class LocalStorage{
    static getBooks(){
       return  window.localStorage.getItem("books") ? JSON.parse(window.localStorage.getItem("books")) : [];
        
    }

    static addBook(book){
        const books = this.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(bookTr){
        const ISBN = bookTr.children[2].innerText;

        const updatedBooks = this.getBooks().filter(book => book.ISBN != ISBN);
        
        window.localStorage.setItem("books", JSON.stringify(updatedBooks));
    

    }


    // aman sheidzleba chaanacvlos zeda ori add da remove
    // static updateStorage(){
        
    //     const bookTrs = Array.from(document.querySelector(".table-body").children);
    //     const books = [];

    //     bookTrs.forEach(tr => {
    //         const book = {
    //             title: tr.children[0].innerText,
    //             author: tr.children[1].innerText,
    //             ISBN: tr.children[2].innerText,
    //         }
    //         books.push(book);
    //     })

    //     window.localStorage.setItem("books", JSON.stringify(books));
    
    // }

}


(function app(){
    const form = document.querySelector(".booklist-form");
    const tBody = document.querySelector(".table-body");
    const bookState = {
        isEditing: false,
        editingTr: null,
        editingBook: null,
    }

    // //Get books from localStorage
    // const books = LocalStorage.getBooks();
    // //Display localStorage books in UI
    // UI.displayBooks(books);

    document.addEventListener("DOMContentLoaded", () => {
         //Get books from localStorage
    const books = LocalStorage.getBooks();
    //Display localStorage books in UI
    UI.displayBooks(books);
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        //Validate form 
        if(form.title.value === "",  form.author.value === "", form.isbn.value === ""){
            UI.showAlert("Please fill in all forms","danger");
            return;

        } 
        if(bookState.isEditing){
            const editedBook = new Book(form.title.value, form.author.value, form.isbn.value)

            bookState.editingTr.children[0].textContent = editedBook.title;          
            bookState.editingTr.children[1].textContent = editedBook.author;
            bookState.editingTr.children[2].textContent = editedBook.ISBN;

            bookState.editingTr.classList.remove("border-left", "border-warning");
            bookState.isEditing = false;
            bookState.editingBook = null;
            bookState.editingTr = null;

            form.reset();

        }else{
            //Create new book object 
            const book = new Book(form.title.value, form.author.value, form.isbn.value)

            //Reset form
            form.reset();

            //Add boot to UI
            UI.addBook(book);
            //Add book to localStorage
            LocalStorage.addBook(book);
            // LocalStorage.updateStorage();
            //Show success alert
            UI.showAlert("Book was added successfuly","success");
        }

    })

    tBody.addEventListener("click", (e) => {
        if(e.target.classList.contains("btn-danger")){
            //Remove book from UI
            UI.removeBook(e.target.parentElement.parentElement);
            //Remove Book from localStorage
            LocalStorage.removeBook(e.target.parentElement.parentElement);
            // LocalStorage.updateStorage();
            UI.showAlert("Book was succesfuly deleted ","warning");



        }else if(e.target.classList.contains("btn-warning")){
            bookState.isEditing = true;
            bookState.editingTr = e.target.parentElement.parentElement;

            bookState.editingBook = {
                title: bookState.editingTr.children[0].textContent,
                author: bookState.editingTr.children[1].textContent,
                ISBN: bookState.editingTr.children[2].textContent,
            }

            bookState.editingTr.classList.add("border-left", "border-warning");

            form.title.value = bookState.editingBook.title;
            form.author.value = bookState.editingBook.author;
            form.isbn.value = bookState.editingBook.ISBN;
            form.title.focus();
        }

    })

})();