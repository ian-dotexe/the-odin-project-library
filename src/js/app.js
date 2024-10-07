// app.js
import { Book, Library } from './script.js';

const myLibrary = new Library();

// Example books data
const booksData = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", numPages: 295, read: false },
    { title: "1984", author: "George Orwell", numPages: 328, read: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", numPages: 281, read: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numPages: 180, read: true }
]; // Array d'objets (oui, tout est objet en JS versus en Python, ce serait une liste de dictionnaires.)


booksData.forEach(bookData => {
    const newBook = new Book(bookData.title, bookData.author, bookData.numPages, bookData.read); // Transformation de chaque objet de la liste d'objet booksData en une instance de Book.
    myLibrary.addBookToLibrary(newBook); // Ajout à la librairie
});


document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('numPages').value;
    const isRead = document.getElementById('isRead').value;

    const newBook = new Book(title, author, numPages, isRead); // Transformation de chaque objet de la liste d'objet booksData en une instance de Book.
    myLibrary.addBookToLibrary(newBook); // Ajout à la librairie

    // Clear the form fields
    document.getElementById('dataForm').reset();
});