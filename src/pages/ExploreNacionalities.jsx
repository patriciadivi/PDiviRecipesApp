import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Header.css';

export default function ExploreNacionalities() {
  return (
    <div>
      <Header title="Explore Nationalities" searchEnabled />
      <DropdownButton
        id="dropdown-basic-button"
        className="mt-3 mx-auto "
        title="Select Nationality"
        size="lg"
        variant="secondary"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <div>
        <Footer />
      </div>
    </div>
  );
}
