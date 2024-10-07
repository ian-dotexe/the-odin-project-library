// script.js

// Class for creating Book objects
export class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    info() {
        const readStatus = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`;  // return une chaîne de caractères formatée !! C'est bien une string.
    }
}

// Class for managing a library of books
export class Library {
    constructor() {
        this.books = []; // Array to hold the book objects
    }

    addBookToLibrary(book) {
        if (book instanceof Book) { // Check if the passed object is an instance of Book
            this.books.push(book);
            this.renderBooks(); // Automatically render after adding a book !!! A chaque fois qu'on ajoute un livre à la bibliothèque, on met à jour la bibliothèque affichée !
            this.renderBooksInTable();
        } else {
            console.error('Invalid book object');
        }
    }

    listBooks() {
        return this.books.map(book => book.info()).join('<br>'); // Use <br> for HTML line breaks. Concaténation des strings retournées par la méthode Book.info() et séparation par <br>. Il s'agit bien d'une seule longue string en output.
    }

    renderBooks() {
        const bookListDiv = document.getElementById('book-list'); // Ou injecter l'HTML
        bookListDiv.innerHTML = this.listBooks(); 
        // Update the inner HTML of the div, injection de l'HTML. Lorsqu'une méthode modifie le DOM (Document Object Model), il est courant qu'elle ne retourne pas de valeur. 
        // Les méthodes qui ont des effets secondaires (comme changer le contenu d'une page web) ne nécessitent généralement pas de retour de valeur.
    }

    renderBooksInTable() {
        const bookTableBody = document.getElementById('book-table-body'); // Get the tbody element
        // Clear existing rows if necessary --> OUI PLUS QUE N2CESSAIRE (VOIR SCREENSHOT !)
        bookTableBody.innerHTML = '';
        
        // Loop through the library's books and create table rows
        this.books.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.numPages}</td>
                <td>${book.read ? 'Yes' : 'No'}</td>
            `;
            // Append the new row to the tbody
        bookTableBody.appendChild(row);
    });
    }
}