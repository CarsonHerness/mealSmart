import React from 'react';

import RecipeSearchItem from './RecipeSearchItem';

import RECIPES from '../hardcoded-recipes';

import { CardDeck } from 'reactstrap';

const recipes = RECIPES;

class Home extends React.Component {
    render() {
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
                        {/* Display all recipes from search. Currently hard-coded to show all recipes. */}
                        {recipes.map(r => <RecipeSearchItem recipe={r}></RecipeSearchItem>)}
                    </CardDeck>
                </body>
            </div>
        );
    }
}

export default Home;
