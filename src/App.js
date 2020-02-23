import React from 'react';
import logo from './logo.png';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

import Navbar from './components/Navbar'
import './App.css';


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

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
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

          <ul>
            {
              recipes.map(r => <li>{r.name}
              </li>)
            }
          </ul>


        </body>

      </div>
    );
  }

}

export default App;
