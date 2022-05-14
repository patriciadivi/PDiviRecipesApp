import React from 'react';
import { useHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Header.css';
import '../styles/pages/pagesExplore.css';
import '../styles/components/Footer.css';

export default function Explore() {
  const history = useHistory();
  return (
    <section className="Explore">
      <Header title="Explorer" searchEnabled={ false } />
      <div className="ExploreDiv">
        <button
          type="button"
          // variant="light"
          data-testid="explore-foods"
          // size="lg"
          className="backGroundFoods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          // variant="light"
          data-testid="explore-drinks"
          // size="lg"
          className="backGroundDrinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks

        </button>
      </div>
      <Footer />
    </section>
  );
}
