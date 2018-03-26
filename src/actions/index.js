import axios from 'axios';

const API = 'https://localhost:8080/';

export const getAllVehicles = (params = {}) => {
  return (dispatch) => {
    axios.get(`${API}public/cars/search`, {
      params: {
        ...params,
        brand: 'grupo-sinal'
      }
    })
      .then((response) => {
        dispatch({
          type: 'GET_ALL_VEHICLES',
          payload: response.data.cars
        });
      });
  }
}

export const getFilters = (params = {}) => {
  return (dispatch) => {
    axios.get(`${API}public/cars/filters?`, {
        params: {
          ...params,
          brand: 'grupo-sinal'
        }
      })
      .then((response) => {
        dispatch({
          type: 'GET_FILTERS',
          payload: response.data
        });
      });
  }
}

export const setFilterValue = (name, value) => {
  return {
    type: 'SET_FILTER_VALUE',
    payload: {
      name,
      value
    }
  }
}
