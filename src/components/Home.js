import React from 'react';
import logo from '../logo.png';

import { NavLink } from 'react-router-dom';
import Recipe from './Recipe';

const recipes = [

    {
        id: 1,
        name: "Caramel Apple",
        ingredients: [{ amount: "2", unit: "tbsp", name: "Caramel" }, { amount: "1", unit: "Whole", name: "Apple" }],
        instructions: "Pour caramel on apple. Done.",
        thumbnail: "https://tachyons.io/img/avatar_1.jpg"
    },

    {
        id: 2,
        name: "Boiled Egg",
        ingredients: [{ amount: "1", unit: "Whole", name: "Egg" }],
        instructions: "Boil water. Put in egg for 8 minutes. Done.",
        thumbnail: "https://tachyons.io/img/avatar_1.jpg"
    },

    {
        id: 3,
        name: "Toast",
        ingredients: [{ amount: "1", unit: "Slice", name: "Bread" }, { amount: "1", unit: "tsp", name: "Butter" }],
        instructions: "Toast bread for 2 minutes. Spread butter. Done.",
        thumbnail: "https://tachyons.io/img/avatar_1.jpg"
    }

];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                id: 1,
                name: "Caramel Apple",
                ingredients: [{ amount: "2", unit: "tbsp", name: "Caramel" }, { amount: "1", unit: "Whole", name: "Apple" }],
                instructions: "Pour caramel on apple. Done.",
                thumbnail: "https://tachyons.io/img/avatar_1.jpg"
            }
        };
    }

    handleClick(recipe) {
        this.setState(state => ({
            recipe: recipe
        }));
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
                    <div class="btn-group">
                        {recipes.map(r => <button onClick={() => this.handleClick(r)}>
                            {r.name}</button>)}
                    </div>
                    <Recipe recipe={this.state.recipe}></Recipe>
                </body>

            </div>
        );
    }
}



export default Home;
