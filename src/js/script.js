class Library {
    constructor() {
        this.books = []
    }

    addBookToLibrary(book) {
        this.books.push(book)
        this.renderBooks(); // Call to update the display whenever a book is added
    }

    listBooks() {
        return this.books.map(book => book.info()).join('<br>'); // Use <br> for HTML line breaks
    }

    renderBooks() {
        const bookListDiv = document.getElementById("book-list");
        bookListDiv.innerHTML = this.listBooks(); // Update the inner HTML of the div
    }
} 


class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    info() {
        // this.read returns True or False, so need to make it a readable string
        const readStatus = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`;
    }
}

// NE JAMAIS DECLARER LES VARIABLES AVANT L'ENTIERE DEFINITION DES FONCTIONS (VOIR "DOM")
/*
// Example usage:
const myLibary = new Library();
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

*/