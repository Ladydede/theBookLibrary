document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');


        
    // Information for each book
    const booksInfo = {
        "Guns, Germs, and Steel": {
            Title: "Guns, Germs, and Steel",
            Description: "Jared Diamond explores how environmental factors have shaped the course of human history and contributed to the rise of civilizations.",
            Publishing_Date: "March 7, 1997",
            ISBN: "978-0393317558",
            Pages: "480",
            Category: "History, Anthropology, Non-fiction",
        },
        "The History of the Ancient World": {
            Title: "The History of the Ancient World",
            Description: "Susan Wise Bauer provides a comprehensive history of the ancient world, from the earliest recorded events to the fall of Rome.",
            Publishing_Date: "February 17, 2007",
            ISBN: "978-0393059748",
            Pages: "896",
            Category: "History, Ancient Civilizations, Non-fiction",
        },
        "The Rise and Fall of the Third Reich": {
            Title: "The Rise and Fall of the Third Reich",
            Description: "William L. Shirer offers a detailed account of the rise of Nazi Germany and the events leading to the downfall of the Third Reich.",
            Publishing_Date: "October 17, 1960",
            ISBN: "978-1451651683",
            Pages: "1249",
            Category: "History, WWII, Non-fiction",
        },
        "A People's History of the United States": {
            Title: "A People's History of the United States",
            Description: "Howard Zinn presents an alternative view of U.S. history, focusing on the experiences of marginalized groups and social movements.",
            Publishing_Date: "August 1, 1980",
            ISBN: "978-0060838652",
            Pages: "729",
            Category: "History, U.S. History, Non-fiction",
        },
        "Team of Rivals": {
            Title: "Team of Rivals",
            Description: "Doris Kearns Goodwin chronicles Abraham Lincoln's political genius by examining his relationships with his key cabinet members.",
            Publishing_Date: "October 25, 2005",
            ISBN: "978-0743270755",
            Pages: "944",
            Category: "History, U.S. Civil War, Biography, Non-fiction",
        },
        "The Silk Roads": {
            Title: "The Silk Roads",
            Description: "Peter Frankopan retells the history of the world from the perspective of the Silk Roads, highlighting the importance of Asia in world history.",
            Publishing_Date: "August 27, 2015",
            ISBN: "978-1101946329",
            Pages: "656",
            Category: "History, World History, Non-fiction",
        },
        "The Wright Brothers": {
            Title: "The Wright Brothers",
            Description: "David McCullough’s biography of Orville and Wilbur Wright, the brothers who pioneered human flight.",
            Publishing_Date: "May 5, 2015",
            ISBN: "978-1476728742",
            Pages: "336",
            Category: "Biography, History, Non-fiction",
        },
       "The Diary of a Young Girl": {
            Title: "The Diary of a Young Girl",
            Description: "Anne Frank’s diary documents her life in hiding during Nazi occupation and has become one of the most poignant accounts of the Holocaust.",
            Publishing_Date: "June 25, 1947",
            ISBN: "978-0553296983",
            Pages: "283",
            Category: "Memoir, Holocaust, Non-fiction",
        },
        "The Second World War": {
            Title: "The Second World War",
            Description: "Antony Beevor provides an expansive account of World War II, covering the key battles, political decisions, and individual experiences.",
            Publishing_Date: "June 6, 2012",
            ISBN: "978-0316023740",
            Pages: "880",
            Category: "History, WWII, Non-fiction",
        },
        "The Crusades": {
            Title: "The Crusades",
            Description: "Thomas Asbridge chronicles the bloody and protracted history of the Crusades and their lasting impact on Christian-Muslim relations.",
            Publishing_Date: "March 29, 2010",
            ISBN: "978-0060787295",
            Pages: "784",
            Category: "History, Medieval, Non-fiction",
        },
        "Alexander Hamilton": {
            Title: "Alexander Hamilton",
            Description: "Ron Chernow presents a detailed biography of Alexander Hamilton, one of the founding fathers of the United States.",
            Publishing_Date: "April 26, 2004",
            ISBN: "978-1594200090",
            Pages: "818",
            Category: "Biography, U.S. History, Non-fiction",
        },
       "SPQR: A History of Ancient Rome": {
            Title: "SPQR: A History of Ancient Rome",
            Description: "Mary Beard provides a comprehensive account of the history of ancient Rome, examining its rise and enduring influence.",
            Publishing_Date: "November 9, 2015",
            ISBN: "978-0871404237",
            Pages: "608",
            Category: "History, Ancient Rome, Non-fiction",
        },
        "The Path Between the Seas": {
            Title: "The Path Between the Seas",
            Description: "David McCullough’s narrative about the creation of the Panama Canal, a project that transformed global trade and politics.",
            Publishing_Date: "June 1, 1977",
            ISBN: "978-0671244095",
            Pages: "704",
            Category: "History, Engineering, Non-fiction",
        },
        "1776": {
            Title: "1776",
            Description: "David McCullough narrates the dramatic events of the year 1776 and the beginning of the American Revolution.",
            Publishing_Date: "May 24, 2005",
            ISBN: "978-0743226721",
            Pages: "386",
            Category: "History, U.S. Revolution, Non-fiction",
        },
        "The Romanovs: 1613-1918": {
            Title: "The Romanovs: 1613-1918",
            Description: "Simon Sebag Montefiore tells the epic story of the Romanov dynasty, which ruled Russia for over three centuries.",
            Publishing_Date: "January 28, 2016",
            ISBN: "978-0307266521",
            Pages: "784",
            Category: "History, Russia, Non-fiction",
        },
        "In the Garden of Beasts": {
            Title: "In the Garden of Beasts",
            Description: "Erik Larson tells the story of the Dodd family, who moved to Nazi Berlin in 1933 and witnessed the rise of Hitler firsthand.",
            Publishing_Date: "May 10, 2011",
            ISBN: "978-0307408846",
            Pages: "464",
            Category: "History, WWII, Non-fiction",
        },
        "The Liberation Trilogy": {
            Title: "The Liberation Trilogy",
            Description: "Rick Atkinson’s trilogy covers the American and Allied military operations in North Africa, Italy, and Western Europe during WWII.",
            Publishing_Date: "May 15, 2002 (Book 1)",
            ISBN: "978-0805062885",
            Pages: "640 (Book 1)",
            Category: "History, WWII, Non-fiction",
        },
        "The Guns of August": {
            Title: "The Guns of August",
            Description: "Barbara W. Tuchman chronicles the events leading up to and during the first month of World War I in this classic historical narrative.",
            Publishing_Date: "January 29, 1962",
            ISBN: "978-0345476098",
            Pages: "511",
            Category: "History, WWI, Non-fiction",
        },
       "The Civil War: A Narrative": {
            Title: "The Civil War: A Narrative",
            Description: "Shelby Foote’s three-volume work provides an in-depth narrative of the American Civil War, examining both the military and political aspects.",
            Publishing_Date: "November 12, 1958 (Vol 1)",
            ISBN: "978-0394495179",
            Pages: "840 (Vol 1)",
            Category: "History, U.S. Civil War, Non-fiction",
        },
        "Stalingrad: The Fateful Siege": {
            Title: "Stalingrad: The Fateful Siege",
            Description: "Antony Beevor recounts the brutal and decisive Battle of Stalingrad, a turning point in World War II.",
            Publishing_Date: "May 1, 1998",
            ISBN: "978-0140249859",
            Pages: "493",
            Category: "History, WWII, Non-fiction",
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