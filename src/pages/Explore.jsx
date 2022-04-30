import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/Header.css';

export default function Explore() {
  return (
    <div>
      <Header title="Explorer" searchEnabled={ false } />
      <div>
        <Footer />
      </div>
    </div>
  );
}
