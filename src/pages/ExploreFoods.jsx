import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BtnsExploreRecepies from '../components/BtnsExploreRecepies';

export default function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" searchEnabled={ false } />
      <BtnsExploreRecepies type="foods" />
      <div>
        <Footer />
      </div>
    </div>
  );
}
