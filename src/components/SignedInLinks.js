import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'
import { Button, Nav, NavItem, NavLink } from 'reactstrap'

const SignedInLinks = (props) => {
    return (
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/add-recipe/">Add Recipe</NavLink>{' '}
            </NavItem>
            <Button onClick={props.signOut}>Log Out</Button>{' '}
            <NavItem>
                <NavLink href="/">{props.profile.initials}</NavLink>
            </NavItem>
        </Nav>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)