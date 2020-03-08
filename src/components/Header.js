import logo from '../logo.png';

import React from 'react';

import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';

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

        this.toggle = this.toggle.bind(this);
        //this.setIsOpen = this.setIsOpen.bind(this);
    }
    setIsOpen(newisOpen) {
        this.setState({
            isOpen: newisOpen
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

                   <LoginModal/>
                   <SignUpModal/>
                </Navbar>
            </div>
        );
    }
}

export default Header;