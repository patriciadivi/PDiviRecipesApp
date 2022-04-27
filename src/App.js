import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
// import Recepie from './pages/Recepie';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      {/* recepies  */}
      {/* <Route exact path="/foods/:id" component={ Recepie } />
      <Route exact path="/drinks/:id" component={ Recepie } /> */}
      {/* recepies in progress  */}
      {/* utilizar o id e o path para identificar a API que deve ser chamada. */}
      {/* <Route exact path="/foods/{id-da-receita}/in-progress" component={ InProgress } />
      <Route exact path="/drinks/{id-da-receita}/in-progress"
      component={ InProgress } /> */}
      {/* explore */}
      {/* <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } /> */}
      {/* utilizar alguma prop para diferenciar se o componente vai ser chamado para foods ou ingredients
      ou utilizar o path para identificar qual deve ser buscado pela API. */}
      {/* <Route exact path="/explore/foods/ingredients" component={ Ingrdients } />
      <Route exact path="/explore/drinks/ingredients" component={ Ingrdients } />
      <Route exact path="/explore/drinks/nationalities"
      compronent={ Nationalities } /> */}
      {/* paginas complementares */}
      <Route exact path="/profile" component={ Profile } />
      {/* <Route exact path="/done-recepies" component={ DoneRecepies } /> */}
      {/* <Route exact path="/favorite-recepies"
      components={ FavoriteRecepies } /> */}
    </Switch>
  );
}

export default App;
