import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import firebase from 'firebase';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';

import Header from './components/Header';
import './App.css';

import RECIPES from './hardcoded-recipes';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/add-recipe" component={AddRecipe} />
              <Route exact path="/recipe" component={Recipe} />

                {/* make route for every recipe */}
                {/*recipes.get().then(snapshot => {snapshot.forEach(r => <Route path={`/recipe/${r.id}`} render={() => <Recipe recipe={r}></Recipe> } /> )})*/}

              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
