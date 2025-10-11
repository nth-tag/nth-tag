import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const reviews = [
  {
    author: 'Samuel Luna',
    text: 'Hello Kuya Allan, I will give you 5 star for great and fast services, you completely fix my Laptop'
  },
  {
    author: 'Isabelle RD',
    text: 'Thank you, Allan for fixing my Dell laptop and iPhone. You helped me look for affordable parts and it did not spend too much. Labor fee is reasonable. Very accommodating. Thanks, Neighbor!'
  },
  {
    author: 'Aileen Ferrer',
    text: 'SUPER AMAZING! He fixed my laptop smoothly, and he upgraded it remotely , he fixed the keys , debloat it to make it faster . He\'s very responsive to all my inquires .and the most and very good news is he charged me with a very low price .'
  },
  {
    author: 'Regie Llana',
    text: 'Great service provided. Allan is very knowledgeable and helpful. Always completes a job when promised. Thanks again for all your help!!Laptop is still working well!!'
  },
  {
    author: 'Mi Ko',
    text: 'Very very professional. As someone who works in a fast pace industry, he\'s timeliness, responsiveness and accuracy is top notch. HIGHLY RECOMMENDED!!!'
  },
  {
    author: 'Miles Angcaya',
    text: "He's a professional in terms of this kind of stuff. You can depend on him when you are experiencing problems in your gadgets. He has good qualities and at the same time he is very responsive and reliable."
  }
];

const Reviews = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">
        <a 
          href="https://www.google.com/maps/place/Nth+TAG(Freelance)+-+Computer+Repair+%7C+IT+Consultant/@14.1109585,120.9504588,17z/data=!4m14!1m7!3m6!1s0x33bd77784f16a93f:0xdf28465a0928f551!2sNth+TAG(Freelance)+-+Computer+Repair+%7C+IT+Consultant!8m2!3d14.1109533!4d120.9530337!16s%2Fg%2F1tj6rc37!3m5!1s0x33bd77784f16a93f:0xdf28465a0928f551!8m2!3d14.1109533!4d120.9530337!16s%2Fg%2F1tj6rc37?authuser=0&entry=ttu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-decoration-none"
          style={{ color: 'var(--text-light)' }}
        >
          Customer Reviews
        </a>
      </h2>
      <div className="text-center mb-4">
        <span className="display-4 fw-bold">5.0</span>
        <span className="text-warning"> ★★★★★ </span>
        <p className="lead">Based on 38 reviews</p>
      </div>
      <Row>
        {reviews.map((review, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{review.text}</p>
                  <footer className="blockquote-footer">
                    {review.author}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Reviews;
