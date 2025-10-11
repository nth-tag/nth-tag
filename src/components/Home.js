import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bg-dark text-light p-5 mb-4 rounded-3 text-center">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">Welcome to Nth-Tag</h1>
        <p className="fs-4">
          Your dedicated freelance partner for computer repair and IT consulting.
        </p>
        <Button variant="primary" size="lg" href="#gallery">View Our Work</Button>
      </Container>
    </div>
  );
}

export default Home;