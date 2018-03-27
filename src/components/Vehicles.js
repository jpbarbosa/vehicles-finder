import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchVehicles } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchVehicles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filtersValues !== this.props.filtersValues) {
      this.props.fetchVehicles(_.pickBy(this.props.filtersValues));
    }
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          {this.props.vehicles.map(vehicle => (
            <li key={vehicle._id}>
              <span>{vehicle.make.name} - </span>
              <span>{vehicle.model.name} - </span>
              <span>{vehicle.version.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    vehicles: state.vehicles.all,
    loading: state.vehicles.loading,
    filtersValues: state.filtersValues,
  }
);

export default connect(mapStateToProps, { fetchVehicles })(App);
