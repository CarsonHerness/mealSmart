import React from 'react';
import RecipeSearchItem from './RecipeSearchItem';
import RECIPES from '../hardcoded-recipes';
import { CardDeck } from 'reactstrap';
import { connect } from 'react-redux'

// const recipes = RECIPES;

class Home extends React.Component {
    render() {
        // console.log(this.props);

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
                                // Pass in each recipe as a prop.
                                <RecipeSearchItem recipe={recipe} key={recipe.id}></RecipeSearchItem>
                            )
                        })}
                        {/* Display all recipes from search. Currently hard-coded to show all recipes. */}
                        {/*recipes.map(r => <RecipeSearchItem recipe={r}></RecipeSearchItem>)*/}
                    </CardDeck>
                </body>
            </div>
        );
    }
}

// mapStateToProps tells connect what data to retrieve from the store
const mapStateToProps = (state) => {
    return {
        // Attach the recipe property from STATE's rootReducer
        //   which in turn has a recipes property from the projectReducer
        //   to a recipes property inside the PROPS of this component
        recipes: state.recipe.recipes
    }
} 

// Connect gets data from the store
export default connect(mapStateToProps)(Home);
