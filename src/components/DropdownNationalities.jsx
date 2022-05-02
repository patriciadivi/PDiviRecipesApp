import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function DropdownNationalities() {
  return (
    <DropdownButton
      className="mt-3 mx-auto "
      title="Select Nationality"
      size="lg"
      variant="secondary"
      data-testid="explore-by-nationality-dropdown"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}
