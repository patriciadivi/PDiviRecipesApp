import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import getDoneRecipes from '../services/getDoneRecipes';
import '../styles/components/Header.css';

export default function DoneRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => { getDoneRecipes(); setRecipes(() => []); }, []);
  console.log(recipes);
  return (
    <div>
      <Header title="Done Recipes" searchEnabled={ false } />
    </div>
  );
}
