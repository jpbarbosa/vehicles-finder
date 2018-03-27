import axios from 'axios';
import {
  FETCH_FILTERS,
  SET_FILTER_VALUE,
  FETCH_VEHICLES,
  LOADING_VEHICLES,
} from './types';

const API = 'https://localhost:8080/';

export const fetchFilters = (params = {}) => (
  (dispatch) => {
    axios.get(`${API}public/cars/filters`, {
      params: {
        ...params,
        brand: 'grupo-sinal',
      },
    }).then((response) => {
      dispatch({
        type: FETCH_FILTERS,
        payload: response.data,
      });
    });
  }
);

export const setFilterValue = (name, value) => (
  {
    type: SET_FILTER_VALUE,
    payload: {
      name,
      value,
    },
  }
);

export const loadingVehicles = loading => (
  {
    type: LOADING_VEHICLES,
    payload: loading,
  }
);

export const fetchVehicles = (params = {}) => (
  (dispatch) => {
    dispatch(loadingVehicles(true));
    axios.get(`${API}public/cars/search`, {
      params: {
        ...params,
        brand: 'grupo-sinal',
      },
    }).then((response) => {
      dispatch({
        type: FETCH_VEHICLES,
        payload: response.data.cars,
      });
    }).then(() => {
      dispatch(loadingVehicles(false));
    });
  }
);
