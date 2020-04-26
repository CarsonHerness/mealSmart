import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../store/actions/authActions'

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
      this.setState({
        modal: !this.state.modal
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth, authError } = this.props;

    // if a user is signed in, they shouldn't be able to access this page
    //   redirect them to the homepage
    if (auth.uid) return <Redirect to='/' />

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Sign Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.handleChange} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Sign Up</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              <div className = "red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
