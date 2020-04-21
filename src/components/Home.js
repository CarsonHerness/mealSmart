import React from 'react';
import RecipeSearchItem from './RecipeSearchItem';
import { CardDeck, Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends React.Component {

    constructor(props) {
        super(props);

        //Create local state to store search term
        this.state = {
            searchName: '',
            searchIngredients: '',
            filteredRecipes: this.props.recipes
        };

        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.updateNameText = this.updateNameText.bind(this);
        this.handleIngredientsSearch = this.handleIngredientsSearch.bind(this);
        this.updateIngredientsText = this.updateIngredientsText.bind(this);
    }

    updateNameText(event) {

        this.setState({ searchName: event.target.value });
    }

    handleNameSearch(event) {

        event.preventDefault();

        if (this.props.recipes && this.state.searchName != '') {

            let newFilteredRecipes = null;

            newFilteredRecipes = this.props.recipes.filter(recipe => {
                return recipe.name.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1;
            });

            this.setState({ filteredRecipes: newFilteredRecipes });
        }


    }


    updateIngredientsText(event) {

        this.setState({ searchIngredients: event.target.value });
    }

    handleIngredientsSearch(event) {

        event.preventDefault();

        if (this.props.recipes && this.state.searchIngredients != '') {

            let newFilteredRecipes = null;

            newFilteredRecipes = this.props.recipes.filter(recipe => {
                //This is a really bad practice checking for a particular ingredient, but it works:
                //Specifically, I check to see if there's a space in front of the ingredient
                //to make sure that the substring at least matches the beginning of the word.
                return !!(recipe.ingredientsList
                    .filter(ingredient => ingredient.toLowerCase().indexOf(" " + this.state.searchIngredients.toLowerCase()) !== -1).length);
            });

            this.setState({ filteredRecipes: newFilteredRecipes });
        }


    }



    render() {
        // Grabs the recipes object off the props
        const { recipes } = this.props;

        //Get search terms
        const { searchName } = this.state;

        const { searchIngredients } = this.state;

        //Get filtered recipes
        const { filteredRecipes } = this.state;


        return (
            <div className="App">
                <body className="App-body">

                    <Container>
                        <Row>
                            <Col>
                                <form onSubmit={this.handleNameSearch}>
                                    <label>
                                        Search by recipe name:
              <input type="text" name="name" value={searchName} onChange={this.updateNameText} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </Col>

                            <Col>
                                <form onSubmit={this.handleIngredientsSearch}>
                                    <label>
                                        Search by recipe ingredients:
              <input type="text" name="name" value={searchIngredients} onChange={this.updateIngredientsText} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </Col>
                        </Row>
                    </Container>
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
