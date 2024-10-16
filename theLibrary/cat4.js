document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');


    // Information for each book
    const booksInfo = {
        "The Waste Land and Other Poems": {
            Title: "The Waste Land and Other Poems",
            Description: "T.S. Eliot's groundbreaking collection, including 'The Waste Land,' a modernist masterpiece reflecting the fragmented condition of post-World War I society.",
            Publishing_Date: "1922",
            ISBN: "978-0156948777",
            Pages: "144",
            Category: "Poetry, Modernist, Non-fiction",
        },
        "Leaves of Grass": {
            Title: "Leaves of Grass",
            Description: "Walt Whitman's epic collection of poems celebrating democracy, nature, and the self, profoundly shaping American literature.",
            Publishing_Date: "1855",
            ISBN: "978-0143039273",
            Pages: "768",
            Category: "Poetry, American, Non-fiction",
        },
        "The Collected Poems": {
            Title: "The Collected Poems",
            Description: "W.H. Auden’s comprehensive collection of poems showcasing his mastery of language, form, and themes of politics and love.",
            Publishing_Date: "1945",
            ISBN: "978-0679731979",
            Pages: "960",
            Category: "Poetry, Modernist, Non-fiction",
        },
        "The Essential Rumi": {
            Title: "The Essential Rumi",
            Description: "A collection of Rumi's spiritual and lyrical poetry, offering timeless wisdom on love, mysticism, and the human experience.",
            Publishing_Date: "April 28, 1995",
            ISBN: "978-0062509598",
            Pages: "416",
            Category: "Poetry, Sufi, Spiritual, Non-fiction",
        },
        "The Raven and Other Poems": {
            Title: "The Raven and Other Poems",
            Description: "Edgar Allan Poe's iconic collection, featuring the hauntingly melancholic 'The Raven' and other gothic masterpieces.",
            Publishing_Date: "1845",
            ISBN: "978-0486266855",
            Pages: "64",
            Category: "Poetry, Gothic, Non-fiction",
        },
        "The Late": {
            Title: "The Late",
            Description: "An unspecified poetry collection known for themes of reflection, time, and the human condition.",
            Publishing_Date: "Unknown",
            ISBN: "N/A",
            Pages: "Unknown",
            Category: "Poetry",
        },
        "The Divine Comedy": {
            Title: "The Divine Comedy",
            Description: "Dante Alighieri’s epic narrative poem tracing the journey of the soul through Hell, Purgatory, and Paradise.",
            Publishing_Date: "1320",
            ISBN: "978-0142437223",
            Pages: "752",
            Category: "Poetry, Epic, Religious, Non-fiction",
        },
        "Be All Of": {
            Title: "Be All Of",
            Description: "A poetic work, title suggests themes of self-realization and completeness.",
            Publishing_Date: "Unknown",
            ISBN: "N/A",
            Pages: "Unknown",
            Category: "Poetry",
        },
        "The Selected Poems by Emily Dickinson": {
            Title: "The Selected Poems by Emily Dickinson",
            Description: "A curated selection of Emily Dickinson's concise, introspective poems exploring life, death, and nature.",
            Publishing_Date: "1890",
            ISBN: "978-0679643265",
            Pages: "256",
            Category: "Poetry, American, Non-fiction",
        },
        "Ariel": {
            Title: "Ariel",
            Description: "Sylvia Plath’s posthumous collection of poems that grapple with personal trauma, nature, and identity.",
            Publishing_Date: "1965",
            ISBN: "978-0060732608",
            Pages: "224",
            Category: "Poetry, Confessional, Non-fiction",
        },
        "Paradise Lost": {
            Title: "Paradise Lost",
            Description: "John Milton’s epic poem that recounts the biblical story of humanity’s fall from grace, exploring themes of free will and redemption.",
            Publishing_Date: "1667",
            ISBN: "978-0140424393",
            Pages: "512",
            Category: "Poetry, Epic, Religious, Non-fiction",
        },
        "The Odyssey": {
            Title: "The Odyssey",
            Description: "Homer's epic recounting the adventures of Odysseus as he returns home from the Trojan War, a foundational work in Western literature.",
            Publishing_Date: "8th century BC",
            ISBN: "978-0140268867",
            Pages: "560",
            Category: "Poetry, Epic, Mythology, Non-fiction",
        },
       "Odes": {
            Title: "Odes",
            Description: "Horace’s influential lyric poems exploring themes of love, politics, and philosophy in ancient Rome.",
            Publishing_Date: "23 BC",
            ISBN: "978-0140442090",
            Pages: "400",
            Category: "Poetry, Classical, Non-fiction",
        },
       "The Collected Poems of W.B. Yeats": {
            Title: "The Collected Poems of W.B. Yeats",
            Description: "A comprehensive collection of W.B. Yeats’ works, reflecting his journey from Romanticism to Modernism, touching on Irish politics and mysticism.",
            Publishing_Date: "1933",
            ISBN: "978-0684807317",
            Pages: "576",
            Category: "Poetry, Irish, Non-fiction",
        },
        "Hundred Poems": {
            Title: "Hundred Poems",
            Description: "Seamus Heaney’s lyrical poetry that captures the essence of rural life, identity, and historical memory in Ireland.",
            Publishing_Date: "1995",
            ISBN: "978-0374536002",
            Pages: "224",
            Category: "Poetry, Irish, Non-fiction",
        },
        "Sonnets": {
            Title: "Sonnets",
            Description: "William Shakespeare’s renowned collection of 154 sonnets, exploring themes of love, time, beauty, and mortality.",
            Publishing_Date: "1609",
            ISBN: "978-0140424386",
            Pages: "192",
            Category: "Poetry, English Renaissance, Non-fiction",
        },
        "The Canterbury Tales": {
            Title: "The Canterbury Tales",
            Description: "Geoffrey Chaucer’s classic collection of stories told by a group of pilgrims, each reflecting different aspects of medieval life.",
            Publishing_Date: "1400",
            ISBN: "978-0140422344",
            Pages: "544",
            Category: "Poetry, Medieval, Non-fiction",
        },
        "The Collected Poems of Langston Hughes": {
            Title: "The Collected Poems of Langston Hughes",
            Description: "A collection of Langston Hughes’ poetic works, celebrating African-American culture and identity with themes of social justice.",
            Publishing_Date: "1994",
            ISBN: "978-0679764083",
            Pages: "736",
            Category: "Poetry, African-American, Non-fiction",
        },
        "The Love Poems of Rumi": {
            Title: "The Love Poems of Rumi",
            Description: "A selection of Rumi's most heartfelt and passionate poems, exploring divine and human love.",
            Publishing_Date: "May 12, 1999",
            ISBN: "978-1570625299",
            Pages: "224",
            Category: "Poetry, Sufi, Love, Non-fiction",
        },
        "The Complete Poems of Emily Dickinson": {
            Title: "The Complete Poems of Emily Dickinson",
            Description: "The complete collection of Emily Dickinson’s poetry, capturing her deep reflections on life, death, and immortality.",
            Publishing_Date: "1955",
            ISBN: "978-0316184137",
            Pages: "770",
            Category: "Poetry, American, Non-fiction",
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