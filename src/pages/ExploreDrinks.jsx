import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BtnsExploreRecepies from '../components/BtnsExploreRecepies';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" searchEnabled={ false } />
      <BtnsExploreRecepies type="drinks" />
      <div>
        <Footer />
      </div>
    </div>
  );
}
