import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from  '../store/actions/authActions'
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

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
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
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { authError, auth } = this.props;

    // if a user is signed in, they shouldn't be able to access this page
    //   redirect them to the homepage
    if (auth.uid) return <Redirect to='/' />

    return (
      <div>
        <Button color="light" onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
            <ModalBody>

              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Log In</Button>{' '}
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
