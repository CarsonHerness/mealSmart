// Create initial state since the state won't
//   be active yet when the reducer is first run
const initState = {
    // Hardcoded recipes before linking to Firebase
    recipes: [
        {id: 1, name: "Caramel Apple", description: "Apple of your dreams",
        thumbnail: "https://www.affytapple.com/assets/2/26/DimRegular/plain-caramel-apples-case-of-121.jpg?2792"},
        {id: 2, name: "Boiled Egg", description: "Nice and boiled",
        thumbnail: "https://live.staticflickr.com/5032/6998540716_9da78f7e23.jpg"},
        {id: 3, name: "Toast", description: "You've never been so cronchy",
        thumbnail: "https://live.staticflickr.com/23/31859184_95084944b7.jpg"}
    ]
}

// This function is where we minipulate the state
const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            console.log('added recipe', action.recipe);
    }
    return state;
}

export default recipeReducer