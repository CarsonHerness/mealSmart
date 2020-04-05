import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';

import Header from './components/Header';
import './App.css';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/add-recipe" component={AddRecipe} />
              <Route path="/recipe/:id" component={Recipe} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
