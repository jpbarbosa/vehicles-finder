import React from 'react';

const Vehicle = ({ vehicle }) => (
  <div className="Vehicle">
    <img src={vehicle.photos[0].url} alt={vehicle.make.name} />
    <div>
      <b>{vehicle.make.name} {vehicle.model.name}</b>
    </div>
    <div>{vehicle.version.name}</div>
  </div>
);

export default Vehicle;
