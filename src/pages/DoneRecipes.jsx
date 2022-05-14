import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import ButtonDoneSelectType from '../components/ButtonDoneSelectType';
import DoneCards from '../components/DoneCards';
import Header from '../components/Header';
import getDate from '../services/getDate';
import getDoneRecipes from '../services/getDoneRecipes';
import randomIdNumber from '../services/randomIdNumber';
import '../styles/components/Header.css';

export default function DoneRecipes() {
  getDate();
  const [recipes, setRecipes] = useState([]);

  const handleType = (type = 'all') => {
    const recipesList = getDoneRecipes(type);
    setRecipes(() => recipesList);
  };

  useEffect(() => {
    const doneRecipesLocal = getDoneRecipes();
    setRecipes(() => doneRecipesLocal);
  }, []);

  console.log(recipes);
  return (
    <div>
      <Header title="Done Recipes" searchEnabled={ false } />
      <ButtonDoneSelectType handleClick={ handleType } />
      {recipes.length > 0
        && recipes.map((e, i) => (
          <DoneCards
            key={ e.id + randomIdNumber() }
            id={ e.id }
            imageSrc={ e.image }
            title={ e.name }
            index={ i }
            category={ e.category }
            date={ e.doneDate }
            tags={ e.tags }
          />))}
    </div>
  );
}
