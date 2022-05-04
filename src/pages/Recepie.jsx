import React from 'react';
import Header from '../components/Header';
import DescriptionOfRecipes from '../components/DescriptionOfRecipes';
import '../styles/components/Header.css';

export default function Recepie() {
  return (
    <section>
      <Header title="Recepie" />
      <DescriptionOfRecipes />
    </section>
  );
}
