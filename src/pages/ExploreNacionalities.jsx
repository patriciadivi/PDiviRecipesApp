import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropdownNationalities from '../components/DropdownNationalities';
import '../styles/components/Header.css';

export default function ExploreNacionalities() {
  return (
    <div>
      <Header title="Explore Nationalities" searchEnabled />
      <DropdownNationalities />
      <div>
        <Footer />
      </div>
    </div>
  );
}
