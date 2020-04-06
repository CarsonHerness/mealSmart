import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    // Properties of the store's state
    // Each reducer updates info for their respective properties
    auth: authReducer,
    recipe: recipeReducer,
    firestore: firestoreReducer
})

export default rootReducer