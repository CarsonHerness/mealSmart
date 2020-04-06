// Create initial state since the state won't
//   be active yet when the reducer is first run
const initState = {
    recipes: []
}

// This function is where we minipulate the state
const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            console.log('added recipe', action.recipe);
            return state;
        case 'ADD_RECIPE_ERROR':
            console.log('added recipe error', action.err);
            return state;
        default:
            return state;
    }
}

export default recipeReducer