import axios from 'axios';
import {
  FETCH_VEHICLES,
  LOADING_VEHICLES,
} from './types';

export const loadingVehicles = loading => (
  {
    type: LOADING_VEHICLES,
    payload: loading,
  }
);

export const fetchVehicles = (params = {}) => (
  (dispatch) => {
    dispatch(loadingVehicles(true));
    axios.get(`${process.env.REACT_APP_API}public/cars/search`, {
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
