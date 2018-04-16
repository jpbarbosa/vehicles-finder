import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FilterSelect from './FilterSelect';
import { fetchFilters, setFilterValue } from '../actions/filters';
import _ from 'lodash';

class Filters extends Component {

  state = {
    redirect: false,
  }

  componentWillMount() {
    this.props.fetchFilters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values !== this.props.values ) {
      this.setState({
        redirect: false,
      });
      this.props.fetchFilters(_.pickBy(this.props.values));
    }
  }

  handleChange = (e) => {
    this.props.setFilterValue(e.target.name, e.target.value);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { filters, values } = this.props;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/',
            search: `?${Object.entries(_.pickBy(this.props.values)).map(([key, val]) => `${key}=${val}`).join('&')}`,
          }}
        />
      );
    }

    if (!filters) {
      return <div>Loading...</div>
    }
    return (
      <div className="Filters">
        <h2>Filters</h2>
        <FilterSelect
          name="make"
          label="Make"
          onChange={this.handleChange}
          value={values.make}
          options={filters.makes}
        />
        <FilterSelect
          name="model"
          label="Model"
          onChange={this.handleChange}
          value={values.model}
          options={filters.models}
        />
        <FilterSelect
          name="color"
          label="Color"
          onChange={this.handleChange}
          value={values.color}
          options={filters.colors}
        />
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
