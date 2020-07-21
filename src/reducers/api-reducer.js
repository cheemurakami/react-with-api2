import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  animals: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_ANIMALS:
      return {
        ...state,
        isLoading: true
      }
    case c.GET_ANIMALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        animals: action.animals
      }
    case c.GET_ANIMALS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}