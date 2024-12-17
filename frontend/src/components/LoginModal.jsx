// src/components/LoginModal.jsx

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
