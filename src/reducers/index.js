import { combineReducers } from 'redux';
import filtersReducer from './filters-reducer';
import filtersValuesReducer from './filtersValues-reducer';
import vehiclesReducer from './vehicles-reducer';

export default combineReducers({
  vehicles: vehiclesReducer,
  filters: filtersReducer,
  filtersValues: filtersValuesReducer,
});
