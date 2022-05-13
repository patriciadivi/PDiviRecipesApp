import React from 'react';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ACTIVE_SEARCH_BAR } from '../Redux/actions/actionTypes';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/components/Header.css';

export default function Header({ title, searchEnabled }) {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <button
        type="button"
        className="btnHeaderProfile"
      >
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
        </Link>
      </button>
      <h2 data-testid="page-title">{title}</h2>
      { searchEnabled && (
        <button
          type="button"
          className="btnHeaderProfile"
          onClick={ () => dispatch({ type: ACTIVE_SEARCH_BAR }) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Explore Icon"
          />
        </button>)}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchEnabled: PropTypes.bool,
};

Header.defaultProps = { searchEnabled: false };
