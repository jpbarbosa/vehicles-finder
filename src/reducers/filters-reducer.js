const INITIAL_STATE = {
  options: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_FILTERS':
      return {
        ...state,
        options: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
