export const addRecipe = (recipe) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'ADD_RECIPE', recipe: recipe });
    }
};