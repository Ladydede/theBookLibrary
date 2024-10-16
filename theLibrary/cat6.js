document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');
    
    // Information for each book
    const booksInfo = {
        "In Patagonia": {
            Title: "In Patagonia",
            Description: "Bruce Chatwin’s classic travel memoir, documenting his journey through the remote and wild region of Patagonia.",
            Publishing_Date: "1977",
            ISBN: "978-0142437193",
            Pages: "240",
            Category: "Travel, Memoir",
        },
        "The Geography of Bliss": {
            Title: "The Geography of Bliss",
            Description: "Eric Weiner's humorous and philosophical travelogue, exploring different countries to understand the nature of happiness.",
            Publishing_Date: "January 3, 2008",
            ISBN: "978-0446580267",
            Pages: "345",
            Category: "Travel, Self-Discovery",
        },
       "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel": {
            Title: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
            Description: "Rolf Potts’ guide to long-term travel, filled with practical tips and inspiration for those seeking extended journeys.",
            Publishing_Date: "December 24, 2002",
            ISBN: "978-0812992182",
            Pages: "240",
            Category: "Travel, Guidebook",
        },
        "A Walk in the Woods": {
            Title: "A Walk in the Woods",
            Description: "Bill Bryson’s account of his humorous and challenging attempt to hike the Appalachian Trail.",
            Publishing_Date: "May 4, 1998",
            ISBN: "978-0767902526",
            Pages: "276",
            Category: "Travel, Adventure, Humor",
        },
        "The Art of Travel": {
            Title: "The Art of Travel",
            Description: "Alain de Botton’s philosophical exploration of why we travel, blending insights from literature, art, and personal experience.",
            Publishing_Date: "2002",
            ISBN: "978-0375725340",
            Pages: "272",
            Category: "Travel, Philosophy",
        },
       "Into the Wild": {
            Title: "Into the Wild",
            Description: "Jon Krakauer's gripping account of Christopher McCandless’ ill-fated journey into the Alaskan wilderness.",
            Publishing_Date: "January 13, 1996",
            ISBN: "978-0385486804",
            Pages: "224",
            Category: "Travel, Adventure, Biography",
        },
        "Lonely Planet’s Ultimate Travel: A List of 500 Best Places on the Planet": {
            Title: "Lonely Planet’s Ultimate Travel: A List of 500 Best Places on the Planet",
            Description: "A visually stunning collection of the 500 best travel destinations in the world, selected by Lonely Planet’s experts.",
            Publishing_Date: "October 20, 2015",
            ISBN: "978-1743607473",
            Pages: "328",
            Category: "Travel, Guidebook, Reference",
        },
        "Wild: From Lost to Found on the Pacific Crest Trail": {
            Title: "Wild: From Lost to Found on the Pacific Crest Trail",
            Description: "Cheryl Strayed’s memoir of her solo hike on the Pacific Crest Trail, a journey of self-discovery and healing.",
            Publishing_Date: "March 20, 2012",
            ISBN: "978-0307476074",
            Pages: "315",
            Category: "Travel, Memoir",
        },
        "The Alchemist": {
            Title: "The Alchemist",
            Description: "Paulo Coelho’s allegorical novel about a shepherd’s quest for personal transformation as he journeys to find treasure.",
            Publishing_Date: "1988",
            ISBN: "978-0061122415",
            Pages: "208",
            Category: "Travel, Fiction, Philosophy",
        },
        "Eat, Pray, Love": {
            Title: "Eat, Pray, Love",
            Description: "Elizabeth Gilbert’s memoir of self-discovery, as she travels through Italy, India, and Indonesia after a personal crisis.",
            Publishing_Date: "February 16, 2006",
            ISBN: "978-0143038412",
            Pages: "352",
            Category: "Travel, Memoir",
        },
        "On the Road": {
            Title: "On the Road",
            Description: "Jack Kerouac’s iconic novel, based on his cross-country travels through America, capturing the spirit of the Beat Generation.",
            Publishing_Date: "1957",
            ISBN: "978-0142437254",
            Pages: "320",
            Category: "Travel, Fiction",
        },
        "The Old Patagonian Express": {
            Title: "The Old Patagonian Express",
            Description: "Paul Theroux’s travel narrative of his journey by train from Boston to Patagonia, blending adventure and insightful commentary.",
            Publishing_Date: "1979",
            ISBN: "978-0140049299",
            Pages: "384",
            Category: "Travel, Memoir",
        },
        "Dark Star Safari": {
            Title: "Dark Star Safari",
            Description: "Paul Theroux recounts his overland journey through Africa, exploring the continent’s complexities, challenges, and beauty.",
            Publishing_Date: "April 1, 2003",
            ISBN: "978-0618134243",
            Pages: "496",
            Category: "Travel, Memoir",
        },
        "The Great Railway Bazaar": {
            Title: "The Great Railway Bazaar",
            Description: "Paul Theroux’s famous travelogue chronicling his four-month journey through Europe, the Middle East, India, and Southeast Asia by train.",
            Publishing_Date: "1975",
            ISBN: "978-0141038841",
            Pages: "384",
            Category: "Travel, Memoir",
        },
        "The Motorcycle Diaries": {
            Title: "The Motorcycle Diaries",
            Description: "Ernesto Che Guevara’s travel memoir about his motorcycle trip through South America, which shaped his revolutionary perspective.",
            Publishing_Date: "2004",
            ISBN: "978-1876175702",
            Pages: "175",
            Category: "Travel, Memoir, Biography",
        },
       "The Lost City of Z": {
            Title: "The Lost City of Z",
            Description: "David Grann’s adventure tale of British explorer Percy Fawcett’s search for a lost civilization in the Amazon jungle.",
            Publishing_Date: "February 24, 2009",
            ISBN: "978-0385513531",
            Pages: "352",
            Category: "Travel, History, Adventure",
        },
        book_17: {
            Title: "Shantaram",
            Description: "Gregory David Roberts’ epic novel, based on his own life, about an Australian fugitive who finds a new life in the slums of Bombay.",
            Publishing_Date: "2003",
            ISBN: "978-0312330538",
            Pages: "936",
            Category: "Travel, Fiction, Adventure",
        },
       "Shantaram": {
            Title: "Under the Tuscan Sun",
            Description: "Frances Mayes’ memoir about buying and restoring an old villa in Tuscany, discovering the beauty of Italian life.",
            Publishing_Date: "September 3, 1996",
            ISBN: "978-0767900386",
            Pages: "320",
            Category: "Travel, Memoir",
        },
        "Travels with Charley": {
            Title: "Travels with Charley",
            Description: "John Steinbeck’s memoir of his cross-country road trip through the United States with his poodle, Charley.",
            Publishing_Date: "1962",
            ISBN: "978-0140053203",
            Pages: "214",
            Category: "Travel, Memoir",
        },
        "The Road to Little Dribbling": {
            Title: "The Road to Little Dribbling",
            Description: "Bill Bryson’s humorous account of his journey around Britain, revisiting the country he first explored 20 years earlier.",
            Publishing_Date: "October 13, 2015",
            ISBN: "978-0385539289",
            Pages: "384",
            Category: "Travel, Humor, Memoir",
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