const recipes = [
    
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    
];

// Function to display recipes
function displayRecipes(recipes) {
    const recipeCardsContainer = document.getElementById('recipeCards');
    // Clear existing cards
    recipeCardsContainer.innerHTML = '';

    recipes.forEach(recipe => {
        // Create a card element and populate it with recipe information
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Type: ${recipe.type}</p>
            <p>Time: ${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
            <button class="${recipe.isLiked ? 'liked' : ''}" onclick="toggleLike(${recipes.indexOf(recipe)})">&#9825;</button>
        `;

        // Append the card to the container
        recipeCardsContainer.appendChild(card);
    });
}

// Function to toggle the "like" status of a recipe
function toggleLike(index) {
    recipes[index].isLiked = !recipes[index].isLiked;
    displayRecipes(recipes);
}

// Function to filter recipes by name
function filterByName(query) {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to filter recipes by type
function filterByType(type) {
    if (type === 'All') {
        return recipes;
    } else {
        return recipes.filter(recipe => recipe.type.toLowerCase() === type.toLowerCase());
    }
}

// Function to filter recipes by rating
function filterByRating(ratingFilter) {
    if (ratingFilter === 'above4.5') {
        return recipes.filter(recipe => recipe.rating > 4.5);
    } else if (ratingFilter === 'below4.0') {
        return recipes.filter(recipe => recipe.rating < 4.0);
    } else {
        return recipes;
    }
}

// Event listeners for search bar, toggle buttons, and radio buttons
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.trim();
    const filteredRecipes = filterByName(query);
    displayRecipes(filteredRecipes);
});

document.getElementById('showAll').addEventListener('click', function () {
    const filteredRecipes = filterByType('All');
    displayRecipes(filteredRecipes);
});

document.getElementById('showVeg').addEventListener('click', function () {
    const filteredRecipes = filterByType('veg');
    displayRecipes(filteredRecipes);
});

document.getElementById('showNonVeg').addEventListener('click', function () {
    const filteredRecipes = filterByType('non-veg');
    displayRecipes(filteredRecipes);
});

document.getElementById('above4.5').addEventListener('change', function () {
    const filteredRecipes = filterByRating('above4.5');
    displayRecipes(filteredRecipes);
});

document.getElementById('below4.0').addEventListener('change', function () {
    const filteredRecipes = filterByRating('below4.0');
    displayRecipes(filteredRecipes);
});

// Initial display of all recipes
displayRecipes(recipes);
