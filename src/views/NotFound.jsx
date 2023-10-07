import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => (
  <Container>
    <p className="text-dark text-center fs-2 mt-5">
     HTTP Error 404 <span className="fw-bold">not found</span> 👾
    </p>
  </Container>
);

export default NotFound;