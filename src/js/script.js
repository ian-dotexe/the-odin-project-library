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

// Example usage:
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());