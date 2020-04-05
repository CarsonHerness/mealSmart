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
              <Button type="submit" color="primary" onClick={this.toggle}>Log In</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
