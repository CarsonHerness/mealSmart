import React from 'react';
import logo from '../logo.png';

class Header extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Header;