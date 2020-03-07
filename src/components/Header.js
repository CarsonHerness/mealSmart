import logo from '../logo.png';

import React from 'react';

import {
    Collapse,
    Form,
    FormGroup,
    Label,
    Input,
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

                        <Form>
                            <FormGroup>
                                <Label color="light" light expand="md">Sign in</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                        </Form>

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;