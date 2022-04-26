import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom';

export default function Header({ title }) {
  return (
    <div>
      <Link to="/profile">
        <Button
          type="button"
          data-testid="profile-top-btn"
        >
          <img src="../images/profileIcon.svg" alt="Profile Icon" />
        </Button>
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      <Button
        type="button"
        data-testid="search-top-btn"
      >
        <img
          src="../images/exploreIcon.svg"
          alt="Explore Icon"
        />
      </Button>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
