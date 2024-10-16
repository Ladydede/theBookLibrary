document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');
    
    // Information for each book
    const booksInfo = {
        "The Great Gatsby": {
            title: "The Great Gatsby",
            description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's love for Daisy Buchanan.",
            pubDate: "1925",
            isbn: "9780743273565",
            pages: "180",
            category: "Fiction"
        },
        "To Kill a Mockingbird": {
            title: "To Kill a Mockingbird",
            description: "A story of racial injustice in the American South, seen through the eyes of a young girl.",
            pubDate: "1960",
            isbn: "9780061120084",
            pages: "324",
            category: "Fiction"
        },
        "1984": {
            title: "1984",
            description: "A dystopian novel about a totalitarian regime under the control of Big Brother.",
            pubDate: "1949",
            isbn: "9780451524935",
            pages: "328",
            category: "Fiction"
        },
        "The Catcher in the Rye": {
            title: "The Catcher in the Rye",
            description: "The story of Holden Caulfield, a teenager navigating adolescence in 1950s New York.",
            pubDate: "1951",
            isbn: "9780316769488",
            pages: "277",
            category: "Fiction"
        },
        "One Hundred Years of Solitude": {
            title: "One Hundred Years of Solitude",
            description: "A multi-generational story of the Buendía family in the town of Macondo.",
            pubDate: "1967",
            isbn: "9780060883287",
            pages: "417",
            category: "Fiction"
        },
        "The Lord of the Rings": {
            title: "The Lord of the Rings",
            description: "An epic high-fantasy novel set in Middle-earth, following the quest to destroy the One Ring.",
            pubDate: "1954",
            isbn: "9780618640157",
            pages: "1178",
            category: "Fiction"
        },
        "Pride and Prejudice": {
            title: "Pride and Prejudice",
            description: "A romantic novel of manners that deals with issues of marriage, money, and society.",
            pubDate: "1813",
            isbn: "9780141199078",
            pages: "279",
            category: "Fiction"
        },
        "Brave New World": {
            title: "Brave New World",
            description: "A dystopian novel about a future society conditioned for obedience and contentment.",
            pubDate: "1932",
            isbn: "9780060850524",
            pages: "268",
            category: "Fiction"
        },
        "The Book Thief": {
            title: "The Book Thief",
            description: "A historical novel set in Nazi Germany, narrated by Death, following a young girl's love for books.",
            pubDate: "2005",
            isbn: "9780375842207",
            pages: "552",
            category: "Fiction"
        },
        "Crime and Punishment": {
            title: "Crime and Punishment",
            description: "A psychological novel about a young man who commits murder and struggles with guilt.",
            pubDate: "1866",
            isbn: "9780486415871",
            pages: "671",
            category: "Fiction"
        },
        "Wuthering Heights": {
            title: "Wuthering Heights",
            description: "A tragic love story set on the Yorkshire moors, following Heathcliff and Catherine Earnshaw.",
            pubDate: "1847",
            isbn: "9780141439556",
            pages: "464",
            category: "Fiction"
        },
        "The Picture of Dorian Gray": {
            title: "The Picture of Dorian Gray",
            description: "A philosophical novel about a man who stays eternally young while his portrait ages.",
            pubDate: "1890",
            isbn: "9780141439570",
            pages: "254",
            category: "Fiction"
        },
        "Moby-Dick": {
            title: "Moby-Dick",
            description: "A novel about Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
            pubDate: "1851",
            isbn: "9780142437247",
            pages: "624",
            category: "Fiction"
        },
        "Anna Karenina": {
            title: "Anna Karenina",
            description: "A complex novel of love, betrayal, and tragedy set in 19th century Russia.",
            pubDate: "1877",
            isbn: "9780143035008",
            pages: "864",
            category: "Fiction"
        },
        "The Brothers Karamazov": {
            title: "The Brothers Karamazov",
            description: "A novel about four brothers and their complex relationships with each other and their father.",
            pubDate: "1880",
            isbn: "9780374528379",
            pages: "796",
            category: "Fiction"
        },
        "The Handmaid's Tale": {
            title: "The Handmaid's Tale",
            description: "A dystopian novel about a future society where women are reduced to reproductive roles.",
            pubDate: "1985",
            isbn: "9780385490818",
            pages: "311",
            category: "Fiction"
        },
        "Beloved": {
            title: "Beloved",
            description: "A novel about a woman haunted by the memory of her daughter whom she killed to save her from slavery.",
            pubDate: "1987",
            isbn: "9781400033416",
            pages: "324",
            category: "Fiction"
        },
        "Gone with the Wind": {
            title: "Gone with the Wind",
            description: "A historical novel set during the American Civil War, centered on Scarlett O'Hara's survival.",
            pubDate: "1936",
            isbn: "9781451635621",
            pages: "1037",
            category: "Fiction"
        },
        "The Alchemist": {
            title: "The Alchemist",
            description: "A philosophical novel about a young shepherd's journey to fulfill his personal legend.",
            pubDate: "1988",
            isbn: "9780062315007",
            pages: "208",
            category: "Fiction"
        },
        "Frankenstein": {
            title: "Frankenstein",
            description: "A Gothic novel about a scientist who creates life, only to be horrified by his creation.",
            pubDate: "1818",
            isbn: "9780486282114",
            pages: "166",
            category: "Fiction"
        }
    };

   // Function to show the pop-up
   function showPopup(bookTitle, event) {
    const bookInfo = booksInfo[bookTitle];
    if (bookInfo) {
        document.getElementById('popup-title').textContent = bookInfo.title;
        document.getElementById('popup-description').textContent = bookInfo.description;
        document.getElementById('popup-pubdate').textContent = bookInfo.pubDate;
        document.getElementById('popup-isbn').textContent = bookInfo.isbn;
        document.getElementById('popup-pages').textContent = bookInfo.pages;
        document.getElementById('popup-category').textContent = bookInfo.category;

        // Position the pop-up directly over the book
        const bookRect = event.target.getBoundingClientRect();
        bookPopup.style.top = bookRect.top + window.scrollY + 'px';
        bookPopup.style.left = bookRect.left + window.scrollX + 'px';
        bookPopup.style.display = 'block';
    }
}

// Function to hide the pop-up
function hidePopup() {
    bookPopup.style.display = 'none';
}

// Add event listeners to each book list item
bookListItems.forEach(function (item) {
    item.addEventListener('mouseenter', function (event) {
        const bookTitle = item.querySelector('strong').textContent;
        showPopup(bookTitle, event);
    });
    item.addEventListener('mouseleave', function () {
        hidePopup();
    });
});

// Make sure the pop-up stays open when the cursor is over it
bookPopup.addEventListener('mouseenter', function () {
    bookPopup.style.display = 'block';
});
bookPopup.addEventListener('mouseleave', function () {
    hidePopup();
});
});