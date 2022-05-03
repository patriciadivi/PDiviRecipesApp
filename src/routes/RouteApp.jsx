import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreIngredients from '../pages/ExploreIngredients';
import ExploreNacionalities from '../pages/ExploreNacionalities';
import FavoriteRecipies from '../pages/FavoriteRecipies';
import Recepie from '../pages/Recepie';
import NotFound from '../pages/NotFound';

export default function RouteApp() {
  return (
    <section className="login">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        {/* recepies  */}
        <Route exact path="/foods/:id" component={ Recepie } />
        <Route exact path="/drinks/:id" component={ Recepie } />
        {/* recepies in progress  */}
        {/* utilizar o id e o path para identificar a API que deve ser chamada. */}
        {/* <Route exact path="/foods/{id-da-receita}/in-progress" component={ InProgress } />
    <Route exact path="/drinks/{id-da-receita}/in-progress"
    component={ InProgress } /> */}
        {/* explore */}
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        {/* utilizar alguma prop para diferenciar se o componente vai ser chamado para foods ou ingredients
    ou utilizar o path para identificar qual deve ser buscado pela API. */}
        <Route exact path="/explore/foods/ingredients" component={ ExploreIngredients } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNacionalities }
        />
        {/* paginas complementares */}
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route
          exact
          path="/favorite-recipes"
          component={ FavoriteRecipies }
        />
        <Route path="/explore" component={ NotFound } />
      </Switch>
    </section>
  );
}
