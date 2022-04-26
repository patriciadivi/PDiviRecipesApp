import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drink } />
      {/* recepies  */}
      <Route exact path="/foods/:id" component={ Recepie } />
      <Route exact path="/drinks/:id" component={ Recepie } />
      {/* recepies in progress  */}
      {/* utilizar o id e o path para identificar a API que deve ser chamada. */}
      <Route exact path="/foods/{id-da-receita}/in-progress" component={ InProgress } />
      <Route exact path="/drinks/{id-da-receita}/in-progress" component={ InProgress } />
      {/* explore */}
      <Route exact path="/explore" compronent={ Explore } />
      <Route exact path="/explore/foods" compronent={ ExploreFoods } />
      <Route exact path="/explore/drinks" compronent={ ExploreDrinks } />
      {/* utilizar alguma prop para diferenciar se o componente vai ser chamado para foods ou ingredients
      ou utilizar o path para identificar qual deve ser buscado pela API. */}
      <Route exact path="/explore/foods/ingredients" compronent={ Ingrdients } />
      <Route exact path="/explore/drinks/ingredients" compronent={ Ingrdients } />
      <Route exact path="/explore/drinks/nationalities" compronent={ Nationalities } />
      {/* paginas complementares */}
      <Route exact path="/profile" compronent={ Profile } />
      <Route exact path="/done-recepies" compronent={ DoneRecepies } />
      <Route exact path="/favorite-recepies" components={ FavoriteRecepies } />
    </Switch>
  );
}

export default App;
