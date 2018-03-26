import { combineReducers } from 'redux';
import vehiclesReducer from './vehicles-reducer';
import filtersReducer from './filters-reducer';
import filtersValuesReducer from './filtersValues-reducer';

export default combineReducers({
  vehicles: vehiclesReducer,
  filters: filtersReducer,
  filtersValues: filtersValuesReducer
});
