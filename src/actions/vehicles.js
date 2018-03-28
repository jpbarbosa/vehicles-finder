import axios from 'axios';
import {
  FETCH_VEHICLES,
  LOADING_VEHICLES,
} from './types';

const API = 'https://localhost:8080/';

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
