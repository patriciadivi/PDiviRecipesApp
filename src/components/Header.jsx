import React from 'react';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { ACTIVE_SEARCH_BAR } from '../Redux/actions/actionTypes';

export default function Header({ title, searchEnabled }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center">
      <Button type="button">
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
        </Link>
      </Button>
      <h2 data-testid="page-title">{title}</h2>
      { searchEnabled && (
        <Button
          type="button"
          onClick={ () => dispatch({ type: ACTIVE_SEARCH_BAR }) }
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
