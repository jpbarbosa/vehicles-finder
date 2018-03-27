import {
  FETCH_VEHICLES,
  LOADING_VEHICLES,
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return {
        ...state,
        all: action.payload,
      };
    case LOADING_VEHICLES:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
