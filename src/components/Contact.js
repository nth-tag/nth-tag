import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const socialLinks = [
    {
      name: "Messenger",
      url: "https://m.me/alnxyz",
      icon: "/images/Facebook_Messenger_logo_2020.svg.png"
    },
    {
      name: "X.com",
      url: "https://x.com/alnxyz",
      icon: "/images/x.com"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/alnxyz",
      icon: "/images/instagram.logo.webp"
    },
    {
      name: "Telegram",
      url: "https://t.me/alnxyz",
      icon: "/images/Telegram_logo.svg.webp"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <h4>Address</h4>
          <p>
            <a 
              href="https://www.google.com/maps/place/Nth+TAG(Freelance)+-+Computer+Repair+%7C+IT+Consultant/@14.1109585,120.9504588,17z/data=!4m14!1m7!3m6!1s0x33bd77784f16a93f:0xdf28465a0928f551!2sNth+TAG(Freelance)+-+Computer+Repair+%7C+IT+Consultant!8m2!3d14.1109533!4d120.9530337!16s%2Fg%2F1tj6rc37!3m5!1s0x33bd77784f16a93f:0xdf28465a0928f551!8m2!3d14.1109533!4d120.9530337!16s%2Fg%2F1tj6rc37?authuser=0&entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Tagaytay City, Cavite 4120
            </a>
          </p>
          
          <h4>Phone</h4>
          <p>
            +639760057607
            <br />
            <a href="tel:+639760057607">Call</a> | <a href="sms:+639760057607">Text</a>
          </p>
          
          <h4>Opening Hours</h4>
          <p>12:00 PM to 7:00 PM</p>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          <h4>Find Us Online</h4>
          <div className="d-flex align-items-center">
            {socialLinks.map(({ name, url, icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="me-3">
               <img src={process.env.PUBLIC_URL + icon} alt={`${name} logo`} height="40" />
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
