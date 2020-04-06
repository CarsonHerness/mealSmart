import React from 'react';
import RecipeSearchItem from './RecipeSearchItem';
import { CardDeck } from 'reactstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends React.Component {
    render() {
        // Grabs the recipes object off the props
        const { recipes } = this.props;
        return (
            <div className="App">
                <body className="App-body">
                    <form>
                        <label>
                            Search:
              <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <CardDeck>
                        {/* Only do map if recipes exist. */}
                        { recipes && recipes.map(recipe => {
                            return (
                                // Create a RecipeSearchItem for each recipe.
                                <RecipeSearchItem recipe={recipe} key={recipe.id}></RecipeSearchItem>
                            )
                        })}
                    </CardDeck>
                </body>
            </div>
        );
    }
}

// mapStateToProps tells connect what data to retrieve from the store
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // Attach the recipe property from STATE's rootReducer
        //   which in turn has a recipes property from the projectReducer
        //   to a recipes property inside the PROPS of this component
        recipes: state.firestore.ordered.recipes
    }
} 

// Connect gets data from the store
export default compose(firestoreConnect(['recipes']),connect(mapStateToProps))(Home)
