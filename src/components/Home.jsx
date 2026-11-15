import React from 'react';
import { Container, Button, Badge } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="hero-banner p-5 mb-4 text-center">
      <Container fluid className="py-5">
        <Badge bg="info" text="dark" className="px-3 py-2 mb-3 text-uppercase fw-bold rounded-pill">
          Tagaytay City • Hybrid IT & Engineering
        </Badge>
        <h1 className="display-4 fw-bold mb-3 hero-title">
          Hardware Diagnostics to Modern Cloud & Web Apps
        </h1>
        <p className="fs-5 text-secondary col-lg-8 mx-auto mb-4 hero-subtitle">
          From motherboard-level device repairs and smartphone fixes to rapid AI-assisted "vibe-coded" web apps and secure Linux VPS deployments.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="primary" size="lg" href="#contact" className="px-4 py-2 fw-semibold">
            Get in Touch / Request Quote
          </Button>
          <Button variant="outline-light" size="lg" href="#about" className="px-4 py-2">
            Explore Services
          </Button>
          <Button variant="outline-info" size="lg" href="#gallery" className="px-4 py-2">
            View Repairs & Work
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;