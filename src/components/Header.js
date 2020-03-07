import logo from '../logo.png';

import React from 'react';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    setIsOpen(isOpen) {
        this.setState({
            isOpen: isOpen
        });
    }

    toggle() {
        this.setIsOpen(!this.isOpen);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={logo} alt="mealSmart logo" title="meal smart"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/about/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact/">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;