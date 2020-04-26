import logo from '../logo.png';

import React, { useState } from 'react';

import SignedInLinks from '../components/SignedInLinks';
import SignedOutLinks from '../components/SignedOutLinks';
import { connect } from 'react-redux'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = (props) => {
    const { auth, profile } = props;

    // show signed in links if a user is signed in
    // otherwise show signed out links
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;

    const [isOpen, setIsOpen] = useState(false);

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
                </Collapse>
                { links }
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header);