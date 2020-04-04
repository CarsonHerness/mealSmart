import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    // Properties of the store's state
    // Each reducer updates info for their respective properties
    auth: authReducer,
    recipe: recipeReducer
})

export default rootReducer