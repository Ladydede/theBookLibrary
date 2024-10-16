document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');
    
    // Information for each book
    const booksInfo = {
       "Sapiens: A Brief History of Humankind": {
            Title: "Sapiens: A Brief History of Humankind",
            Description: "This book explores the history of humanity, from the Stone Age to the modern era, focusing on the role of biology, culture, and evolution in shaping human societies.",
            Publishing_Date: "September 4, 2014",
            ISBN: "978-0062316110",
            Pages: "464",
            Category: "History, Anthropology, Non-fiction",
        },
        "Educated": {
            Title: "Educated",
            Description: "A memoir by Tara Westover, detailing her journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University.",
            Publishing_Date: "February 20, 2018",
            ISBN: "978-0399590504",
            Pages: "334",
            Category: "Memoir, Biography, Non-fiction",
        },
        "The Immortal Life of Henrietta Lacks": {
            Title: "The Immortal Life of Henrietta Lacks",
            Description: "Rebecca Skloot tells the story of Henrietta Lacks, whose cancer cells were harvested without her consent in 1951 and used for groundbreaking medical research.",
            Publishing_Date: "February 2, 2010",
            ISBN: "978-1400052189",
            Pages: "381",
            Category: "Biography, Science, Non-fiction",
        },
        "Becoming": {
            Title: "Becoming",
            Description: "Michelle Obama's memoir, chronicling her experiences from her childhood in Chicago to becoming the First Lady of the United States.",
            Publishing_Date: "November 13, 2018",
            ISBN: "978-1524763138",
            Pages: "448",
            Category: "Memoir, Biography, Non-fiction",
        },
        "Unbroken": {
            Title: "Unbroken",
            Description: "Laura Hillenbrand's biography of Louis Zamperini, a WWII bombardier who survived being stranded at sea and interned in a Japanese POW camp.",
            Publishing_Date: "November 16, 2010",
            ISBN: "978-1400064168",
            Pages: "528",
            Category: "Biography, History, Non-fiction",
        },
        "The Wright Brothers": {
            Title: "The Wright Brothers",
            Description: "David McCullough’s biography of Orville and Wilbur Wright, the brothers who pioneered human flight.",
            Publishing_Date: "May 5, 2015",
            ISBN: "978-1476728742",
            Pages: "336",
            Category: "Biography, History, Non-fiction",
        },
        "Born a Crime": {
            Title: "Born a Crime",
            Description: "Trevor Noah’s memoir about growing up in apartheid South Africa as the child of a black mother and white father, sharing both humor and heart-wrenching stories.",
            Publishing_Date: "November 15, 2016",
            ISBN: "978-0399588174",
            Pages: "304",
            Category: "Memoir, Biography, Non-fiction",
        },
       "When Breath Becomes Air": {
            Title: "When Breath Becomes Air",
            Description: "Paul Kalanithi’s memoir reflects on his transition from being a neurosurgeon to becoming a patient with terminal lung cancer.",
            Publishing_Date: "January 12, 2016",
            ISBN: "978-0812988406",
            Pages: "228",
            Category: "Memoir, Medicine, Non-fiction",
        },
        "Quiet: The Power of Introverts in a World That Can't Stop Talking": {
            Title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
            Description: "Susan Cain explores the undervalued strengths of introverts and their powerful impact on various areas of life.",
            Publishing_Date: "January 24, 2012",
            ISBN: "978-0307352156",
            Pages: "368",
            Category: "Psychology, Non-fiction",
        },
        "The Glass Castle": {
            Title: "The Glass Castle",
            Description: "Jeannette Walls’ memoir recounts her poverty-stricken, chaotic childhood and how she overcame adversity to find success.",
            Publishing_Date: "March 2005",
            ISBN: "978-0743247542",
            Pages: "288",
            Category: "Memoir, Biography, Non-fiction",
        },
       "Thinking, Fast and Slow": {
            Title: "Thinking, Fast and Slow",
            Description: "Daniel Kahneman examines two modes of thought – fast, intuitive thinking and slow, deliberate thinking – and how they affect decision-making.",
            Publishing_Date: "October 25, 2011",
            ISBN: "978-0374275631",
            Pages: "499",
            Category: "Psychology, Non-fiction",
        },
       "Into the Wild": {
            Title: "Into the Wild",
            Description: "Jon Krakauer tells the story of Christopher McCandless, who abandoned his possessions to venture into the Alaskan wilderness, where he met his untimely death.",
            Publishing_Date: "January 20, 1996",
            ISBN: "978-0385486804",
            Pages: "224",
            Category: "Biography, Adventure, Non-fiction",
        },
        "The Man Who Knew Infinity": {
            Title: "The Man Who Knew Infinity",
            Description: "Robert Kanigel’s biography of the Indian mathematician Srinivasa Ramanujan, whose intuitive insights revolutionized mathematics.",
            Publishing_Date: "September 26, 1991",
            ISBN: "978-0349104522",
            Pages: "448",
            Category: "Biography, History of Mathematics, Non-fiction",
        },
        "The Power of Habit": {
            Title: "The Power of Habit",
            Description: "Charles Duhigg explores how habits form, how they influence our lives, and how we can change them to improve our personal and professional lives.",
            Publishing_Date: "February 28, 2012",
            ISBN: "978-1400069286",
            Pages: "371",
            Category: "Self-help, Psychology, Non-fiction",
        },
       "The Tipping Point: How Little Things Can Make a Big Difference": {
            Title: "The Tipping Point: How Little Things Can Make a Big Difference",
            Description: "Malcolm Gladwell examines the phenomenon of tipping points, where small changes can cause significant shifts in society.",
            Publishing_Date: "March 1, 2000",
            ISBN: "978-0316346627",
            Pages: "304",
            Category: "Sociology, Psychology, Non-fiction",
        },
        "Outlive: The Science and Art of Longevity": {
            Title: "Outlive: The Science and Art of Longevity",
            Description: "Peter Attia’s book explores the science of longevity, focusing on health, fitness, and medicine to live longer, healthier lives.",
            Publishing_Date: "March 28, 2023",
            ISBN: "978-0593236598",
            Pages: "496",
            Category: "Health, Science, Non-fiction",
        },
       "The Lean Startup": {
            Title: "The Lean Startup",
            Description: "Eric Ries discusses a new approach to business and startups focused on continuous innovation and adapting quickly to market changes.",
            Publishing_Date: "September 13, 2011",
            ISBN: "978-0307887894",
            Pages: "336",
            Category: "Business, Entrepreneurship, Non-fiction",
        },
        "Steve Jobs": {
            Title: "Steve Jobs",
            Description: "Walter Isaacson’s biography of Steve Jobs, chronicling the life of the co-founder of Apple and his profound impact on the technology industry.",
            Publishing_Date: "October 24, 2011",
            ISBN: "978-1451648539",
            Pages: "656",
            Category: "Biography, Technology, Non-fiction",
        },
        "The 7 Habits of Highly Effective People": {
            Title: "The 7 Habits of Highly Effective People",
            Description: "Stephen Covey’s classic self-help book outlines seven principles for personal and professional effectiveness.",
            Publishing_Date: "August 15, 1989",
            ISBN: "978-0671663988",
            Pages: "381",
            Category: "Self-help, Personal Development, Non-fiction",
        },
        "Grit: The Power of Passion and Perseverance": {
            Title: "Grit: The Power of Passion and Perseverance",
            Description: "Angela Duckworth explores the importance of grit—passion and perseverance—in achieving long-term goals.",
            Publishing_Date: "May 3, 2016",
            ISBN: "978-1501111105",
            Pages: "352",
            Category: "Self-help, Psychology, Non-fiction",
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