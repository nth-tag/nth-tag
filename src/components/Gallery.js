import React from 'react';
import { Container, Image } from 'react-bootstrap';

const images = [
  'images/2020-09-23 (1).webp',
  'images/2020-09-23 (2).webp',
  'images/2020-09-23 (3).webp',
  'images/2020-09-23 (4).webp',
  'images/2020-09-23 (5).webp',
  'images/2020-09-23.webp',
  'images/2020-10-11.webp',
  'images/2020-11-16.webp',
  'images/2020-11-28 (1).webp',
  'images/2020-11-28.webp',
  'images/2021-01-03.webp',
  'images/2021-01-06.webp',
  'images/2021-01-11 (1).webp',
  'images/2021-01-11.webp',
  'images/2021-01-29 (1).webp',
  'images/2021-01-29.webp',
  'images/2022-01-21.webp',
  'images/photo_2022-12-14_17-53-36 (2).webp',
  'images/unnamed (1).webp',
  'images/unnamed.webp'
];

const Gallery = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="masonry-grid">
        {images.map((src, index) => (
          <div key={index} className="masonry-grid-item">
            <Image src={src} alt={`Gallery image ${index + 1}`} thumbnail />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Gallery;