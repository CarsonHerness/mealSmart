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
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
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
              <Button type="submit" color="primary" onClick={this.toggle}>Sign Up</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default SignUpModal;
