export const addRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('recipes').add({
            ...recipe,
            authorFirstName: 'Carson',
            authorLastName: 'Herness',
            authorId: 12345,
            createdAt: new Date()
        }).then(ref => {
            // Create list of lists so each element of an ingredient is seperated
            //   (into quantity, measure, and name)
            let ingredientSplit = recipe.ingredientsList.map((ingredient) => ingredient.split(" "))

            // For each ingredient add a new document to a subcollection "ingredients"
            // Wrap in a promise all function to ensure we don't dispatch until everything
            //   is added to the database
            Promise.all(ingredientSplit.map((ingredient) =>
                firestore.collection('recipes').doc(ref.id).collection('ingredients').add({
                    // BUG: these indices are incorrect depending on how poeple structure
                    //   thier ingredient inputs. 
                    quantity: ingredient[1],
                    measure: ingredient[2],
                    name: ingredient[3]
                }).then(() => {

                }).catch((err) => {
                    dispatch({ type: 'ADD_RECIPE_ERROR', err });
                })
            )).then(() => {
                dispatch({ type: 'ADD_RECIPE', recipe: recipe });
            })
        }).catch((err) => {
            dispatch({ type: 'ADD_RECIPE_ERROR', err });
        })
    }
};