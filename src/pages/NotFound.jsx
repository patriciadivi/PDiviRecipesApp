import React from 'react';
import { Alert } from 'react-bootstrap';

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center">
      <Alert variant="danger">Not Found</Alert>
    </div>
  );
}
