import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Recipe from './components/Recipe';

import Header from './components/Header';
import './App.css';

import RECIPES from './hardcoded-recipes';

const recipes = RECIPES;

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
              <Route exact path="/recipe" component={Recipe} />

              {/* make route for every recipe */}
              {recipes.map(r => <Route path={`/recipe/${r.id}`} render={() => <Recipe recipe={r}></Recipe> } />)}

              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
