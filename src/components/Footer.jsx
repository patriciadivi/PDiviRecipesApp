import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/components/Footer.css';

export default function Footer() {
  return (
    <section className="SectionFooter">
      <footer
        data-testid="footer"
        className="Footer"
      >
        <Link
          to="/drinks"
          className="FooterLink"
        >
          <button type="button">
            <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Drinks" />
          </button>
        </Link>
        <Link
          to="/explore"
          className="FooterLink"
        >
          <button type="button">
            <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Explore" />
          </button>
        </Link>
        <Link
          to="/foods"
          className="FooterLink"
        >
          <button type="button">
            <img data-testid="food-bottom-btn" src={ mealIcon } alt="Foods" />
          </button>
        </Link>
      </footer>
    </section>
  );
}
