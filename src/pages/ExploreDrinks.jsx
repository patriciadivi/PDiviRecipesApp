import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BtnsExploreRecepies from '../components/BtnsExploreRecepies';
import '../styles/components/Header.css';
import '../styles/pages/ExploreDrinks.css';

export default function ExploreDrinks() {
  return (
    <div className="ExploreDrinks">
      <Header title="Explore Drinks" searchEnabled={ false } />
      <BtnsExploreRecepies type="drinks" />
      <div>
        <Footer />
      </div>
    </div>
  );
}
