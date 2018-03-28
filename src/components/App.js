import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import Filters from './Filters';
import VehiclesList from './VehiclesList';

const App = () => (
  <div>
    <header>
      <img src={logo} alt="Vehicles Finder" />
      <h1>Vehicles Finder</h1>
    </header>
    <Filters />
    <VehiclesList />
  </div>
);

export default App;
