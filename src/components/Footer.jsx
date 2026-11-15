import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container>
        <p>&copy; {year} Nth-Tag. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
