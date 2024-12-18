import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Both email and password are required");
      return;
    }

    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const token = response.data.token;
      const roleIsAdmin = response.data.role;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("role", roleIsAdmin);
      }

      if (roleIsAdmin === "admin") {
        navigate("/admin-dashboard");
        window.location.reload();
        handleClose();
      } else {
        setError("Access denied: You are not an admin");
      }

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        setError(error.response.data.message || "Something went wrong");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  const handleAlertRedirect = () => {
    setShowAlert(false);
    navigate("/");
    window.location.reload();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Admin In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="success" className="mt-3">
            <Alert.Heading>Login Successful!</Alert.Heading>
            <p>You have logged in successfully.</p>
            <div className="d-flex justify-content-end">
              <Button onClick={handleAlertRedirect} variant="outline-success">
                Go to Dashboard
              </Button>
            </div>
          </Alert>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AdminModal;
