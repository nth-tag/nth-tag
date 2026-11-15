import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const pillars = [
    {
      title: "1. Hardware & Device Repairs",
      tagline: "Precision physical repair & diagnostics",
      badge: "Local Tagaytay Service",
      items: [
        "Laptops (Dell, Lenovo, Asus, MacBook, HP, etc.)",
        "Smartphone & Tablet repair (screen, battery, board-level)",
        "Hardware upgrades (SSD, RAM, thermal paste, cleaning)",
        "Desktop PC builds, debloating, and OS recovery",
        "Printer setup & troubleshooting"
      ]
    },
    {
      title: "2. Cloud & VPS Infrastructure",
      tagline: "Rock-solid, cost-effective hosting & security",
      badge: "DevOps & Cloud",
      items: [
        "Linux VPS deployment (Hetzner, DigitalOcean, Linode)",
        "Docker containerization & Nginx reverse proxy / SSL",
        "Automated encrypted cloud backups for POS & office data",
        "Domain, DNS, and custom business email setup",
        "Remote server administration & monitoring"
      ]
    },
    {
      title: "3. Rapid Web Apps & MVPs",
      tagline: "AI-accelerated 'vibe-coded' software solutions",
      badge: "Custom Software",
      items: [
        "Custom web applications & MVPs delivered in days",
        "Direct booking portals for boutique hotels, villas & Airbnbs",
        "Digital QR menu & order slips for cafes and restaurants",
        "Event & wedding guest RSVP / seating trackers",
        "Internal office dashboards & automated workflows"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold mb-3">Our Hybrid Expertise</h2>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '750px' }}>
          We bridge physical device engineering with cutting-edge cloud infrastructure and modern rapid software development. One trusted partner for your entire tech stack.
        </p>
      </div>

      <Row className="g-4">
        {pillars.map((pillar, idx) => (
          <Col lg={4} md={6} key={idx}>
            <Card className="service-card h-100 p-3">
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <span className="badge bg-secondary text-light px-2 py-1 mb-2">{pillar.badge}</span>
                  <h4 className="card-title fw-bold">{pillar.title}</h4>
                  <p className="text-muted small">{pillar.tagline}</p>
                </div>
                <hr className="my-3 opacity-25" />
                <ul className="service-list list-unstyled mb-0 mt-auto">
                  {pillar.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-2 d-flex align-items-start">
                      <span className="text-info me-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;