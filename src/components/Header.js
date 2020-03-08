import logo from '../logo.png';

import React, { useState } from 'react';

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

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="meal smart logo" title="mealSmart"></img></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
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

export default Header;