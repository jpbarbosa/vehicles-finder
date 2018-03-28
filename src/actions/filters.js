import axios from 'axios';
import {
  FETCH_FILTERS,
  SET_FILTER_VALUE,
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
