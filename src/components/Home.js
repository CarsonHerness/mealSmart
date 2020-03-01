import React from 'react';
import logo from '../logo.png';

import Recipe from './Recipe';
import RecipeSearchItem from './RecipeSearchItem';

import RECIPES from '../hardcoded-recipes';

const recipes = RECIPES;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: undefined
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} alt="logo" />

                    <form>
                        <label>
                            Username:
              <input type="text" name="name" />
                            Password:
              <input type="text" name="password" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </header>
                <body className="App-body">
                    <form>
                        <label>
                            Search:
              <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                    {/* Display all recipes from search. Currently hard-coded to show all recipes. */}
                    {recipes.map(r => <RecipeSearchItem recipe={r}></RecipeSearchItem>)}
                </body>
            </div>
        );
    }
}

export default Home;
