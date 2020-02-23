import React from 'react';
import logo from './logo.png';
import Navbar from './components/Navbar'
import './App.css';


const recipes = [

  {
    id: 1,
    name: "Caramel Apple",
    ingredients: [{amount:"2",unit:"tbsp", name:"Caramel"},{amount:"1",unit:"Whole", name:"Apple"}],
    instructions: "Pour caramel on apple. Done.",
    thumbnail: "https://tachyons.io/img/avatar_1.jpg"
  },

  {
    id: 2,
    name: "Boiled Egg",
    ingredients:  [{amount:"1",unit:"Whole", name:"Egg"}],
    instructions: "Boil water. Put in egg for 8 minutes. Done.",
    thumbnail: "https://tachyons.io/img/avatar_1.jpg"
  },

  {
    id: 3,
    name: "Toast",
    ingredients: [{amount:"1",unit:"Slice", name:"Bread"},{amount:"1",unit:"tsp", name:"Butter"}],
    instructions: "Toast bread for 2 minutes. Spread butter. Done.",
    thumbnail: "https://tachyons.io/img/avatar_1.jpg"
  }

];

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <Navbar/>
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
        <body className = "App-body">
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
