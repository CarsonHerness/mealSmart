import React from 'react'
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import { Nav } from 'reactstrap';

const SignedOutLinks = () => {
    return (
        <Nav>
            <LoginModal/>
            <SignUpModal/>
        </Nav>
    )
}

export default SignedOutLinks