import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
} from "react-bootstrap";

const AdminDashboard = () => {
  const [allSocieties, setSocieties] = useState([]);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("🚀 ~ AdminDashboard ~ selectedUser:", selectedUser?.societies);

  useEffect(() => {
    const fetchSocieties = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/getAllSocieties"
      );
      const data = response.data;
      setSocieties(data);
    };

    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:8000/api/getAllUsers");
      const data = response.data.data;
      setUsers(data);
    };

    fetchSocieties();
    fetchUsers();
  }, []);

  const handleViewMore = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm text-white bg-primary">
            <Card.Body>
              <Card.Title>Total Societies</Card.Title>
              <Card.Text>{allSocieties.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm text-white bg-success">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>{users.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm text-white bg-warning">
            <Card.Body>
              <Card.Title>Total Events</Card.Title>
              <Card.Text>
                {allSocieties.reduce(
                  (total, society) => total + (society.events || 0),
                  0
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mb-3">User Details</h3>
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3 className="mb-3">Society Details</h3>
      <Row>
        {allSocieties.map((society) => (
          <Col key={society.id} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{society.name}</Card.Title>
                <Card.Text>
                  <strong>User Name:</strong> {society.name}
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> {society.email}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> {society.phoneNumber}
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleViewMore(society)}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Joined Societies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {selectedUser &&
            selectedUser?.societies &&
            selectedUser?.societies.length > 0 ? (
              <ul>
                {selectedUser?.societies.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{item}</p>{" "}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No allSocieties joined.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
