import React from 'react';
import Header from '../components/Header';
import '../styles/components/Header.css';

export default function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" searchEnabled={ false } />
    </div>
  );
}
