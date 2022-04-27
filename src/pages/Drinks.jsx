import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Drinks() {
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  return (
    <div>
      <Header title="Drinks" searchEnabled />
      {searchBarActive && <SearchBar />}
      Drinks
      <div>
        <Footer />
      </div>
    </div>
  );
}
