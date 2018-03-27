import React from 'react';
import Filters from './Filters';
import VehiclesList from './VehiclesList';

const App = () => (
  <div>
    <h1>Vehicles Finder</h1>
    <Filters />
    <VehiclesList />
  </div>
);

export default App;
