import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, searchEnabled }) {
  return (
    <div className="d-flex">
      <Button type="button">
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
        </Link>
      </Button>
      <h2 data-testid="page-title">{title}</h2>
      { searchEnabled && (
        <Button
          type="button"
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Explore Icon"
          />
        </Button>)}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchEnabled: PropTypes.bool.isRequired,
};
