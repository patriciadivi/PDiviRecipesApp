import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import getDoneRecipes from '../services/getDoneRecipes';
import '../styles/components/Header.css';

export default function DoneRecipes() {
  const [recipes, setRecipes] = useState([]);

  const handleType = (type = 'all') => {
    const recipesList = getDoneRecipes(type);
    setRecipes(() => recipesList);
  };

  useEffect(() => { getDoneRecipes(); setRecipes(() => []); }, []);

  console.log(recipes);
  return (
    <div>
      <Header title="Done Recipes" searchEnabled={ false } />
      <div className="ButtonList d-flex flex-wrap justify-content-center">
        <Button
          data-testid="filter-by-all-btn"
          variant="light"
          size="lg"
          className="mx-2"
          onClick={ () => handleType() }
        >
          All
        </Button>
        <Button
          data-testid="filter-by-all-btn"
          variant="light"
          size="lg"
          className="mx-2"
          onClick={ () => handleType('food') }
        >
          Foods
        </Button>
        <Button
          data-testid="filter-by-all-btn"
          variant="light"
          size="lg"
          className="mx-2"
          onClick={ () => handleType('drink') }
        >
          Drinks
        </Button>
      </div>
    </div>
  );
}
