import React from 'react';
import Header from '../components/Header';
import '../styles/components/Header.css';

export default function FavoriteRecipies() {
  return (
    <div>
      <Header title="Favorite Recipes" searchEnabled={ false } />
    </div>
  );
}
