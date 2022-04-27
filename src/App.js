import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// import Recepie from './pages/Recepie';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
import RouteApp from './routes/RouteApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      className="meals"
    >
      <div>
        <RouteApp />
      </div>
    </div>
  );
}

export default App;
