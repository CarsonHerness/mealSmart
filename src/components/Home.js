import React from 'react';
import RecipeSearchItem from './RecipeSearchItem';
import { CardDeck } from 'reactstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends React.Component {

    constructor(props) {
        super(props);

        //Create local state to store search term
        this.state = { searchName: '' };

        this.handleNameSearch = this.handleNameSearch.bind(this);
    }

    handleNameSearch(event) {
        this.setState({ searchName: event.target.value });
    }

    render() {
        // Grabs the recipes object off the props
        const { recipes } = this.props;

        //Get search term
        const { searchName } = this.state;

        let filteredRecipes = null;

        //Filter recipes by checking if search term is a substring of the title
        if (recipes) {
            filteredRecipes = recipes.filter(recipe => {
                return recipe.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
            });
        }

        return (
            <div className="App">
                <body className="App-body">
                    <form >
                        <label>
                            Search by recipe name:
              <input type="text" name="name" value={searchName} onChange={this.handleNameSearch} />
                        </label>
                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                    <CardDeck>
                        {/* Only do map if recipes exist, and only display searched recipes. */}
                        {filteredRecipes && filteredRecipes.map(recipe => {
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
export default compose(firestoreConnect(['recipes']), connect(mapStateToProps))(Home)
