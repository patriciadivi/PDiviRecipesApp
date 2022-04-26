import React from 'react';
import './App.css';
// import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
import RouteApp from './routes/RouteApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="meals">
      <div>
        <RouteApp />
      </div>

      {/* <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object> */}

    </div>
  );
}

export default App;
