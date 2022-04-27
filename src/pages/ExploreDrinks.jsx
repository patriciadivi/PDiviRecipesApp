import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" searchEnabled={ false } />
      <div>
        <Footer />
      </div>
    </div>
  );
}
