import axios from 'axios';
import {
  FETCH_FILTERS,
  SET_FILTER_VALUE,
} from './types';

export const fetchFilters = (params = {}) => (
  (dispatch) => {
    axios.get(`${process.env.REACT_APP_API}public/cars/filters`, {
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
