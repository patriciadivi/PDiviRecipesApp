import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <section data-testid="footer" className="footer">
      <footer>
        <button type="button">
          <Link to="/drinks">
            <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Drinks" />
          </Link>
        </button>
        <button type="button">
          <Link to="/explore">
            <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Explore" />
          </Link>
        </button>
        <button type="button">
          <Link to="/foods">
            <img data-testid="food-bottom-btn" src={ mealIcon } alt="Foods" />
          </Link>
        </button>
      </footer>
    </section>
  );
}
