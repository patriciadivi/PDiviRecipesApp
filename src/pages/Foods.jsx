import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Foods() {
  const searchBarActive = useSelector((state) => state.reducer1.searchBarActive);
  // console.log(searchBarActive);
  return (
    <section className="Foods">
      <Header title="Foods" searchEnabled />
      {searchBarActive && <SearchBar />}
      <div>
        <Footer />
      </div>
    </section>
  );
}
