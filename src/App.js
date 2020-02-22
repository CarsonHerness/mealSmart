import React from 'react';
import logo from './logo.png';
import Navbar from './components/Navbar'
import './App.css';

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


        </body>

      </div>
    );
}
}

export default App;
