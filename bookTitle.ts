// Define a TypeScript type for a book
type TBook = {
    title: string;
    author: string;
    year: number;
};


const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

const titles = (books: TBook[]) => {
    return books.map(book => book.title);
}

const result = titles(books);
console.log(result);