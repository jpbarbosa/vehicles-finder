import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilters, setFilterValue } from './actions';
import _ from 'lodash';

class Filters extends Component {

  componentWillMount() {
    this.props.fetchFilters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values !== this.props.values ) {
      this.props.fetchFilters(_.pickBy(this.props.values));
    }
  }

  handleChange = (e) => {
    this.props.setFilterValue(e.target.name, e.target.value);
  }

  render() {
    const { filters, values } = this.props;
    if (!filters) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h2>Filters</h2>
        <select name="make"
          onChange={this.handleChange}
          value={values.make}
        >
          <option>Select Make</option>
          {filters.makes.map((make) => (
            <option key={make._id} value={make.slug}>{make.name}</option>
          ))}
        </select>
        <select name="model"
          onChange={this.handleChange}
          value={values.model}
        >
          <option>Select Model</option>
          {filters.models.map((model) => (
            <option key={model._id} value={model.slug}>{model.name}</option>
          ))}
        </select>
        <select name="color"
          onChange={this.handleChange}
          value={values.color}
        >
          <option>Select Color</option>
          {filters.colors.map((color) => (
            <option key={color._id} value={color.slug}>{color.name}</option>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.options,
    values: state.filtersValues
  }
}

export default connect(mapStateToProps, {
  fetchFilters,
  setFilterValue
})(Filters);
