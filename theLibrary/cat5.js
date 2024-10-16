document.addEventListener('DOMContentLoaded', function () {
    const bookPopup = document.getElementById('book-popup');
    const bookListItems = document.querySelectorAll('section li');
    
    // Information for each book
    const booksInfo = {
       "Salt, Fat, Acid, Heat": {
            Title: "Salt, Fat, Acid, Heat",
            Description: "Samin Nosrat's guide to mastering the four key elements of cooking—salt, fat, acid, and heat—using science and technique.",
            Publishing_Date: "April 25, 2017",
            ISBN: "978-1476753836",
            Pages: "480",
            Category: "Cookbook, Culinary Science",
        },
        "The Joy of Cooking": {
            Title: "The Joy of Cooking",
            Description: "Irma S. Rombauer’s classic, all-encompassing cookbook, providing over 4,000 recipes from everyday meals to gourmet dishes.",
            Publishing_Date: "1931",
            ISBN: "978-0743246262",
            Pages: "1200",
            Category: "Cookbook, General Cooking",
        },
        "The Barefoot Contessa Cookbook": {
            Title: "The Barefoot Contessa Cookbook",
            Description: "Ina Garten’s debut cookbook offering delicious and simple recipes that anyone can cook, focusing on comfort and style.",
            Publishing_Date: "April 6, 1999",
            ISBN: "978-0609602195",
            Pages: "256",
            Category: "Cookbook, Entertaining",
        },
        "Simple": {
            Title: "Simple",
            Description: "Yotam Ottolenghi presents a collection of quick and easy recipes that still capture the complex flavors he is known for.",
            Publishing_Date: "October 16, 2018",
            ISBN: "978-1607749165",
            Pages: "320",
            Category: "Cookbook, International, Quick Cooking",
        },
        "Mastering the Art of French Cooking": {
            Title: "Mastering the Art of French Cooking",
            Description: "Julia Child’s comprehensive guide to French cuisine, featuring over 500 classic recipes for home cooks.",
            Publishing_Date: "1961",
            ISBN: "978-0307593528",
            Pages: "752",
            Category: "Cookbook, French Cuisine",
        },
        "The Food Lab: Better Home Cooking Through Science": {
            Title: "The Food Lab: Better Home Cooking Through Science",
            Description: "J. Kenji López-Alt uses science to explain cooking techniques, helping home cooks make better food with scientific precision.",
            Publishing_Date: "September 21, 2015",
            ISBN: "978-0393081084",
            Pages: "960",
            Category: "Cookbook, Culinary Science",
        },
        "Plenty": {
            Title: "Plenty",
            Description: "Yotam Ottolenghi’s celebrated vegetarian cookbook, featuring bold flavors and innovative dishes inspired by Mediterranean and Middle Eastern cuisine.",
            Publishing_Date: "March 23, 2011",
            ISBN: "978-1452101248",
            Pages: "288",
            Category: "Cookbook, Vegetarian",
        },
        "The Flavor Bible": {
            Title: "The Flavor Bible",
            Description: "Karen Page and Andrew Dornenburg’s comprehensive guide to flavor pairings, helping cooks experiment with ingredients and enhance their dishes.",
            Publishing_Date: "September 16, 2008",
            ISBN: "978-0316118408",
            Pages: "392",
            Category: "Cookbook, Culinary Reference",
        },
        "How to Cook Everything": {
            Title: "How to Cook Everything",
            Description: "Mark Bittman’s essential guide to mastering cooking with 2,000 recipes for every meal and occasion, perfect for beginners and pros alike.",
            Publishing_Date: "October 20, 2008",
            ISBN: "978-0764578656",
            Pages: "1056",
            Category: "Cookbook, General Cooking",
        },
        "The Smitten Kitchen Cookbook": {
            Title: "The Smitten Kitchen Cookbook",
            Description: "Deb Perelman’s debut cookbook offering simple, approachable, and delicious recipes inspired by her popular blog, Smitten Kitchen.",
            Publishing_Date: "October 30, 2012",
            ISBN: "978-0307595652",
            Pages: "336",
            Category: "Cookbook, General Cooking",
        },
        "The New Best Recipe": {
            Title: "The New Best Recipe",
            Description: "A comprehensive collection of tried-and-true recipes from the editors of Cook’s Illustrated, with detailed instructions and tips.",
            Publishing_Date: "October 15, 2004",
            ISBN: "978-0936184746",
            Pages: "1028",
            Category: "Cookbook, General Cooking",
        },
        "Essentials of Classic Italian Cooking": {
            Title: "Essentials of Classic Italian Cooking",
            Description: "Marcella Hazan’s definitive guide to authentic Italian cooking, with recipes covering pasta, sauces, meats, and desserts.",
            Publishing_Date: "September 13, 1992",
            ISBN: "978-0394584041",
            Pages: "704",
            Category: "Cookbook, Italian Cuisine",
        },
        "Jerusalem: A Cookbook": {
            Title: "Jerusalem: A Cookbook",
            Description: "Yotam Ottolenghi and Sami Tamimi share recipes celebrating the diverse flavors of Jerusalem’s culinary heritage.",
            Publishing_Date: "October 16, 2012",
            ISBN: "978-1607743941",
            Pages: "320",
            Category: "Cookbook, International, Middle Eastern",
        },
        "Everyday Dorie: The Way I Cook": {
            Title: "Everyday Dorie: The Way I Cook",
            Description: "Dorie Greenspan’s collection of everyday recipes that balance comfort with elegance, perfect for any meal.",
            Publishing_Date: "October 23, 2018",
            ISBN: "978-0544826984",
            Pages: "400",
            Category: "Cookbook, General Cooking",
        },
        "Vegetarian Cooking for Everyone": {
            Title: "Vegetarian Cooking for Everyone",
            Description: "Deborah Madison’s all-encompassing guide to vegetarian cooking, featuring over 1,400 recipes for every occasion.",
            Publishing_Date: "March 10, 1997",
            ISBN: "978-0767927475",
            Pages: "752",
            Category: "Cookbook, Vegetarian",
        },
        "The Homemade Pantry: 101 Foods You Can Stop Buying and Start Making": {
            Title: "The Homemade Pantry: 101 Foods You Can Stop Buying and Start Making",
            Description: "Alana Chernila provides recipes and tips for making homemade versions of common pantry staples, from yogurt to crackers.",
            Publishing_Date: "April 3, 2012",
            ISBN: "978-0307887269",
            Pages: "320",
            Category: "Cookbook, DIY, Homemade",
        },
        "Six Seasons: A New Way with Vegetables": {
            Title: "Six Seasons: A New Way with Vegetables",
            Description: "Joshua McFadden’s seasonal vegetable-focused cookbook offers creative ways to prepare vegetables throughout the year.",
            Publishing_Date: "May 2, 2017",
            ISBN: "978-1579656317",
            Pages: "384",
            Category: "Cookbook, Vegetarian",
        },
        "The Joy of Pizza": {
            Title: "The Joy of Pizza",
            Description: "Dan Richer shares his methods and recipes for making world-class pizza at home, including dough techniques and toppings.",
            Publishing_Date: "November 9, 2021",
            ISBN: "978-0316462419",
            Pages: "288",
            Category: "Cookbook, Pizza, Italian Cuisine",
        },
        "Modern Comfort Food": {
            Title: "Modern Comfort Food",
            Description: "Ina Garten’s collection of modern comfort food recipes, bringing warmth and nostalgia with a contemporary twist.",
            Publishing_Date: "October 6, 2020",
            ISBN: "978-0804187060",
            Pages: "256",
            Category: "Cookbook, Comfort Food",
        },
       "The Minimalist Kitchen": {
            Title: "The Minimalist Kitchen",
            Description: "Melissa Coleman’s guide to minimalist cooking, with simple recipes requiring fewer ingredients and minimal kitchen tools.",
            Publishing_Date: "April 10, 2018",
            ISBN: "978-1250127531",
            Pages: "272",
            Category: "Cookbook, Minimalist, Simple Cooking",
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