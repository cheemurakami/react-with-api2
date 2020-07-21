import * as c from './../actions/ActionTypes';

export default (state = { selectedAnimal: null }, action) => {
  switch (action.type) {
    case c.SELECT_ANIMAL:
      return {
        ...state, 
        selectedAnimal: action.animal
      }
      case c.RESET_ANIMAL:
        return {
          ...state,
          selectedAnimal: null
        }
  
      default:
        return state;
  }
}