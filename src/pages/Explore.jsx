import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Explore() {
  return (
    <section>
      <Header title="Explorer" searchEnabled={ false } />
      <div className="d-flex flex-column">
        <Button
          variant="light mt-3 mx-3"
          data-testid="explore-foods"
          size="lg"
        >
          Explore Foods

        </Button>
        <Button
          variant="light mt-3 mx-3"
          data-testid="explore-drinks"
          size="lg"
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
