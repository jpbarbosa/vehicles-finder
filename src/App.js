import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllVehicles } from './actions';
import Filters from './Filters';
import _ from 'lodash';

class App extends Component {

  componentDidMount() {
    this.props.getAllVehicles();
  }

  componentDidUpdate(prevProps) {
    //console.log(this.props.filtersValues)
    if (prevProps.filtersValues !== this.props.filtersValues) {
      this.props.getAllVehicles(_.pickBy(this.props.filtersValues));
    }
  }

  render() {
    if (!this.props.vehicles.length) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>Vehicles Finder</h1>
        <Filters />
        <ul>
          {this.props.vehicles.map((vehicle) => (
            <li key={vehicle._id}>
              <span>{vehicle.make.name} - </span>
              <span>{vehicle.model.name} - </span>
              <span>{vehicle.version.name}</span>
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles.all,
    filtersValues: state.filtersValues
  }
}

export default connect(mapStateToProps, { getAllVehicles })(App);
