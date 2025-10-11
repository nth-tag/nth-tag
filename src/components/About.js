import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const services = [
    "Computer repair service",
    "Computer consultant",
    "Printer repair service",
    "Mobile phone repair shop",
    "IT Consulting",
    "AI Automation Basics",
    "VPS Deployment"
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Row>
        <Col md={6}>
          <h3>Our Commitment</h3>
          <p className="lead">
            We are Nth-TAG: your dedicated freelance partner focused on taking complex tasks off your plate so you can focus on the vision and growth of your business.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;