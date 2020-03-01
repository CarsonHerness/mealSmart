import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Recipe from './components/Recipe';

import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import RECIPES from './hardcoded-recipes';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f // This is for dev tools, optional
));

const recipes = RECIPES;

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
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
      </Provider>
    );
  }

}

export default App;
