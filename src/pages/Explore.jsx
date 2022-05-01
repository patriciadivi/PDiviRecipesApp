import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Header.css';

export default function Explore() {
  const history = useHistory();
  return (
    <section>
      <Header title="Explorer" searchEnabled={ false } />
      <div className="d-flex flex-column">
        <Button
          variant="light"
          data-testid="explore-foods"
          size="lg"
          className="mt-3 mx-3"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </Button>
        <Button
          variant="light"
          data-testid="explore-drinks"
          size="lg"
          className="mt-3 mx-3"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks

        </Button>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
