// Google Books API search function
document.getElementById('search-button').addEventListener('click', searchBooks);

function searchBooks() {
    const query = document.getElementById('search-input').value;
    const apiURL = "https://www.googleapis.com/books/v1/volumes?q=" + query;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';

            data.items.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';

                // Display book cover, title, and author
                bookItem.innerHTML = `
                <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}" alt="Book Cover">
                <h3>${book.volumeInfo.title}</h3>
                <p>Author: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
                `; 

                // Add event listener for more details
                bookItem.addEventListener('click', () => showBookDetails(book));

                bookList.appendChild(bookItem);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
}

// Show detailed information about the selected book
function showBookDetails(book) {
    const bookDetails = document.getElementById('book-details');
    bookDetails.innerHTML = `
        <h2>${book.volumeInfo.title}</h2>
        <p><strong>Author(s):</strong> ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
        <p><strong>Description:</strong> ${book.volumeInfo.description || 'No description available.'}</p>
        <p><strong>Published Date:</strong> ${book.volumeInfo.publishedDate || 'N/A'}</p>
    `;
}
