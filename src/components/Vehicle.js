import React from 'react';

const Vehicle = ({ vehicle }) => (
  <div className="Vehicle">
    <img src={vehicle.photos[0].url} alt={vehicle.make.name} />
    <div>
      {vehicle.make.name} {vehicle.model.name}
    </div>
    <div>{vehicle.version.name}</div>
  </div>
);

export default Vehicle;
